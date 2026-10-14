import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { finalize } from 'rxjs/operators';
import { GroupsService } from '../../services/groups.service';
import { ServersService } from '../../services/servers.service';
import { ToastService } from '../../services/toast.service';
import { Group, Server } from '../../models/models';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups = signal<Group[]>([]);
  allServers = signal<Server[]>([]);
  selectedServerId = signal<string>('');
  searchQuery = signal<string>('');
  loading = signal<boolean>(false);

  // Modal de Detalhes do Grupo
  showGroupModal = signal<boolean>(false);
  selectedGroup = signal<Group | null>(null);
  loadingGroupDetails = signal<boolean>(false);

  filteredGroups = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    let list = this.groups();

    if (this.selectedServerId()) {
      list = list.filter(g => g.serverId === this.selectedServerId());
    }

    if (!q) return list;

    return list.filter(g =>
      g.name.toLowerCase().includes(q) ||
      (g.description && g.description.toLowerCase().includes(q))
    );
  });

  constructor(
    private groupsService: GroupsService,
    private serversService: ServersService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadServers();
    this.loadGroups();
  }

  loadServers(): void {
    this.serversService.getServers().subscribe({
      next: (servers) => this.allServers.set(servers),
      error: () => {}
    });
  }

  loadGroups(): void {
    this.loading.set(true);
    this.groupsService.getGroups(this.selectedServerId() || undefined)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => this.groups.set(data),
        error: (err) => this.toast.error('Erro ao listar grupos: ' + (err.error?.error || err.message))
      });
  }

  onServerChange(e: any): void {
    this.selectedServerId.set(e.target.value);
    this.loadGroups();
  }

  verMembros(group: Group): void {
    this.selectedGroup.set(group);
    this.showGroupModal.set(true);
    this.loadingGroupDetails.set(true);

    this.groupsService.getGroup(group.id)
      .pipe(finalize(() => this.loadingGroupDetails.set(false)))
      .subscribe({
        next: (details) => this.selectedGroup.set(details),
        error: (err) => this.toast.error('Erro ao buscar detalhes do grupo: ' + err.message)
      });
  }

  closeGroupModal(): void {
    this.showGroupModal.set(false);
    this.selectedGroup.set(null);
  }

  getServerName(serverId: string): string {
    const srv = this.allServers().find(s => s.id === serverId);
    return srv ? srv.name : serverId;
  }
}

