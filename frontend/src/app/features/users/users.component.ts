import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { ServersService } from '../../services/servers.service';
import { ToastService } from '../../services/toast.service';
import { User, Server, Permission } from '../../models/models';

import { isExcludedAccount } from '../../utils/account-filter';
import { filterRootPermissions } from '../../utils/permission-filter';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatIconModule, MatButtonModule, MatTooltipModule, MatProgressSpinnerModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = signal<User[]>([]);
  allServers = signal<Server[]>([]);
  selectedServerId = signal<string>('');
  searchQuery = signal<string>('');
  loading = signal<boolean>(false);

  // Modal de Permissões do Usuário
  showPermissionsModal = signal<boolean>(false);
  selectedUser = signal<User | null>(null);
  userPermissions = signal<Permission[]>([]);
  loadingUserPerms = signal<boolean>(false);
  permSearchQuery = signal<string>('');

  filteredUsers = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    let list = this.users().filter(u => !isExcludedAccount(u.username) && !isExcludedAccount(u.name));

    if (this.selectedServerId()) {
      list = list.filter(u => u.serverId === this.selectedServerId());
    }

    if (!q) return list;

    return list.filter(u =>
      (u.name && u.name.toLowerCase().includes(q)) ||
      (u.username && u.username.toLowerCase().includes(q)) ||
      (u.email && u.email.toLowerCase().includes(q))
    );
  });

  filteredUserPerms = computed(() => {
    const q = this.permSearchQuery().toLowerCase().trim();
    const list = this.userPermissions();
    if (!q) return list;
    return list.filter(p =>
      p.path.toLowerCase().includes(q) ||
      (p.targetName && p.targetName.toLowerCase().includes(q))
    );
  });

  constructor(
    private usersService: UsersService,
    private serversService: ServersService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadServers();
    this.loadUsers();
  }

  loadServers(): void {
    this.serversService.getServers().subscribe({
      next: (servers) => this.allServers.set(servers),
      error: () => {}
    });
  }

  loadUsers(): void {
    this.loading.set(true);
    this.usersService.getUsers(this.selectedServerId() || undefined)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => this.users.set(data),
        error: (err) => this.toast.error('Erro ao listar usuários: ' + (err.error?.error || err.message))
      });
  }

  onServerChange(e: any): void {
    this.selectedServerId.set(e.target.value);
    this.loadUsers();
  }

  verPermissoes(user: User): void {
    this.selectedUser.set(user);
    this.showPermissionsModal.set(true);
    this.loadingUserPerms.set(true);
    this.permSearchQuery.set('');

    this.usersService.getUserPermissions(user.id)
      .pipe(finalize(() => this.loadingUserPerms.set(false)))
      .subscribe({
        next: (perms) => this.userPermissions.set(filterRootPermissions(perms)),
        error: (err) => this.toast.error('Erro ao buscar permissões do usuário: ' + err.message)
      });
  }

  closePermissionsModal(): void {
    this.showPermissionsModal.set(false);
    this.selectedUser.set(null);
    this.userPermissions.set([]);
  }

  getServerName(serverId: string): string {
    const srv = this.allServers().find(s => s.id === serverId);
    return srv ? srv.name : serverId;
  }
}

