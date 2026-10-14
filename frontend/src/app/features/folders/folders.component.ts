import { Component, OnInit, signal, computed, HostListener } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { finalize } from 'rxjs/operators';
import { FoldersService } from '../../services/folders.service';
import { ServersService } from '../../services/servers.service';
import { ExportService } from '../../services/export.service';
import { ToastService } from '../../services/toast.service';
import { Folder, FolderNode, Permission, Server } from '../../models/models';
import { isExcludedAccount } from '../../utils/account-filter';

interface GraphNode {
  id: string;
  type: 'folder' | 'user' | 'group';
  data: FolderNode;
  x: number;
  y: number;
  parentId: string | null;
  expandedFolders: boolean;
  expandedPerms: boolean;
  level: number;
  permCount: number;
  hasChildren: boolean;
  childrenCount: number;
}

interface GraphLink {
  sourceId: string;
  targetId: string;
  path: string;
  glowPath: string;
  isActive: boolean;
}

@Component({
  selector: 'app-folders',
  standalone: true,
  imports: [
    CommonModule, NgTemplateOutlet, FormsModule,
    MatIconModule, MatButtonModule, MatTooltipModule,
    MatSelectModule, MatFormFieldModule, MatInputModule
  ],
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {
  allServers = signal<Server[]>([]);
  selectedServerId = signal<string>('');

  tree = signal<FolderNode[]>([]);
  flatFolders = signal<Folder[]>([]);
  allPermissions = signal<Permission[]>([]);

  selectedFolder = signal<Folder | null>(null);
  folderPermissions = signal<Permission[]>([]);

  loading = signal<boolean>(false);
  loadingPerms = signal<boolean>(false);
  loadingExport = false;

  viewMode = signal<'tree' | 'node'>('tree');
  expandedFolders = new Set<string>();
  searchQuery = signal<string>('');

  // Node Graph State
  nodes = signal<GraphNode[]>([]);
  links = signal<GraphLink[]>([]);
  zoom = signal<number>(1);
  panX = signal<number>(50);
  panY = signal<number>(50);
  isDragging = false;
  dragStartX = 0;
  dragStartY = 0;

  zoomPercent = computed(() => Math.round(this.zoom() * 100));

  constructor(
    private foldersService: FoldersService,
    private serversService: ServersService,
    private exportService: ExportService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadServers();
  }

  loadServers(): void {
    this.serversService.getServers().subscribe({
      next: (servers) => {
        this.allServers.set(servers);
        if (servers.length > 0 && !this.selectedServerId()) {
          this.selectedServerId.set(servers[0].id);
          this.loadFolderData(servers[0].id);
        }
      },
      error: (err) => this.toast.error('Erro ao carregar servidores: ' + err.message)
    });
  }

  onServerChange(serverId: string): void {
    this.selectedServerId.set(serverId);
    this.selectedFolder.set(null);
    this.folderPermissions.set([]);
    this.expandedFolders.clear();
    this.loadFolderData(serverId);
  }

  onNativeServerChange(e: any): void {
    this.onServerChange(e.target.value);
  }

  getServerName(serverId: string): string {
    const srv = this.allServers().find(s => s.id === serverId);
    return srv ? `${srv.name} (${srv.ip})` : 'Servidor';
  }

  loadFolderData(serverId: string): void {
    if (!serverId) return;
    this.loading.set(true);

    this.foldersService.getFolders(serverId)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (res) => {
          this.tree.set(res.tree || []);
          this.flatFolders.set(res.folders || []);

          if (res.tree && res.tree.length > 0) {
            this.toggleExpand(res.tree[0].id);
            this.selectFolder(res.tree[0]);
          }

          // Carrega todas as permissões do servidor
          this.foldersService.getPermissions(serverId).subscribe({
            next: (perms) => {
              const cleanPerms = (perms || []).filter(p => !isExcludedAccount(p.targetName));
              this.allPermissions.set(cleanPerms);
              this.buildGraph();
              if (this.viewMode() === 'node') {
                setTimeout(() => this.centerRootNode(), 60);
              }
            },
            error: () => {}
          });
        },
        error: (err) => this.toast.error('Erro ao carregar estrutura de pastas: ' + err.message)
      });
  }

  toggleExpand(folderId: string): void {
    if (this.expandedFolders.has(folderId)) {
      this.expandedFolders.delete(folderId);
    } else {
      this.expandedFolders.add(folderId);
    }
  }

  isExpanded(folderId: string): boolean {
    return this.expandedFolders.has(folderId);
  }

  selectFolder(folder: Folder): void {
    this.selectedFolder.set(folder);
    this.loadingPerms.set(true);

    // Destaca as conexões relacionadas ao nó selecionado
    const selectedId = folder.id;
    this.links.update(existingLinks =>
      existingLinks.map(l => ({
        ...l,
        isActive: l.sourceId === selectedId || l.targetId === selectedId
      }))
    );

    this.foldersService.getFolderPermissions(folder.path, this.selectedServerId())
      .pipe(finalize(() => this.loadingPerms.set(false)))
      .subscribe({
        next: (perms) => {
          const cleanPerms = (perms || []).filter(p => !isExcludedAccount(p.targetName));
          this.folderPermissions.set(cleanPerms);
        },
        error: (err) => this.toast.error('Erro ao carregar permissões da pasta: ' + err.message)
      });
  }

  setViewMode(mode: 'tree' | 'node'): void {
    this.viewMode.set(mode);
    if (mode === 'node') {
      setTimeout(() => {
        this.buildGraph();
        this.centerRootNode();
      }, 60);
    }
  }

  // --- Graph Node View Logic ---
  buildGraph(): void {
    const rootNodes = this.tree();
    if (!rootNodes || rootNodes.length === 0) {
      this.nodes.set([]);
      this.links.set([]);
      return;
    }

    // Pré-calcula contagem de permissões por caminho
    const permsByPath = new Map<string, number>();
    for (const p of this.allPermissions()) {
      const count = permsByPath.get(p.path) || 0;
      permsByPath.set(p.path, count + 1);
    }

    const nodeList: GraphNode[] = [];
    const linkList: GraphLink[] = [];

    const NODE_WIDTH = 280;
    const NODE_HEIGHT = 92;
    const HORIZONTAL_GAP = 96;
    const VERTICAL_GAP = 28;

    const traverse = (node: FolderNode, level: number, startY: number, parentId: string | null): { endY: number, nodeY: number } => {
      const hasChildren = !!(node.children && node.children.length > 0);
      const isExpanded = hasChildren && this.expandedFolders.has(node.id);
      const permCount = permsByPath.get(node.path) || 0;

      let computedY = startY;
      let nextAvailableY = startY;
      const childrenYs: number[] = [];

      if (isExpanded) {
        let childStartY = startY;
        for (const child of node.children) {
          const res = traverse(child, level + 1, childStartY, node.id);
          childrenYs.push(res.nodeY);
          childStartY = res.endY;
        }
        nextAvailableY = childStartY;
        // Centraliza o nó pai verticalmente entre o primeiro e o último filho
        if (childrenYs.length > 0) {
          computedY = Math.round((childrenYs[0] + childrenYs[childrenYs.length - 1]) / 2);
        }
      } else {
        computedY = startY;
        nextAvailableY = startY + NODE_HEIGHT + VERTICAL_GAP;
      }

      const gNode: GraphNode = {
        id: node.id,
        type: 'folder',
        data: node,
        x: level * (NODE_WIDTH + HORIZONTAL_GAP) + 60,
        y: computedY,
        parentId,
        expandedFolders: this.expandedFolders.has(node.id),
        expandedPerms: false,
        level,
        permCount,
        hasChildren,
        childrenCount: node.children ? node.children.length : 0
      };
      nodeList.push(gNode);

      if (parentId) {
        linkList.push({
          sourceId: parentId,
          targetId: node.id,
          path: '',
          glowPath: '',
          isActive: false
        });
      }

      return { endY: nextAvailableY, nodeY: computedY };
    };

    let nextY = 60;
    for (const root of rootNodes) {
      const res = traverse(root, 0, nextY, null);
      nextY = res.endY;
    }

    // Calcula links curvos Bézier
    const nodeMap = new Map<string, GraphNode>(nodeList.map(n => [n.id, n]));
    const activeFolderId = this.selectedFolder()?.id;

    for (const link of linkList) {
      const src = nodeMap.get(link.sourceId);
      const tgt = nodeMap.get(link.targetId);
      if (src && tgt) {
        const x1 = src.x + NODE_WIDTH;
        const y1 = src.y + NODE_HEIGHT / 2;
        const x2 = tgt.x;
        const y2 = tgt.y + NODE_HEIGHT / 2;
        const deltaX = Math.max((x2 - x1) * 0.5, 40);
        const cx1 = x1 + deltaX;
        const cx2 = x2 - deltaX;

        const pathStr = `M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`;
        link.path = pathStr;
        link.glowPath = pathStr;
        link.isActive = (src.id === activeFolderId || tgt.id === activeFolderId);
      }
    }

    this.nodes.set(nodeList);
    this.links.set(linkList);
  }

  toggleNodeFolders(node: GraphNode): void {
    this.toggleExpand(node.id);
    this.buildGraph();
    this.centerRootNode();
  }

  expandAllNodes(): void {
    const addAll = (nodes: FolderNode[]) => {
      for (const n of nodes) {
        if (n.children && n.children.length > 0) {
          this.expandedFolders.add(n.id);
          addAll(n.children);
        }
      }
    };
    addAll(this.tree());
    this.buildGraph();
    this.centerRootNode();
  }

  collapseAllNodes(): void {
    this.expandedFolders.clear();
    if (this.tree().length > 0) {
      this.expandedFolders.add(this.tree()[0].id);
    }
    this.buildGraph();
    this.centerRootNode();
  }

  centerRootNode(): void {
    const nodes = this.nodes();
    if (nodes.length === 0) return;

    const root = nodes.find(n => n.level === 0) || nodes[0];
    const container = document.querySelector('.node-canvas-container');
    const viewW = container ? container.clientWidth : 800;
    const viewH = container ? container.clientHeight : 550;

    const NODE_WIDTH = 280;
    const NODE_HEIGHT = 92;
    const currentZoom = this.zoom();

    // Centraliza o nó raiz no centro exato do canvas
    const targetX = (viewW / 2) - ((NODE_WIDTH * currentZoom) / 2);
    const targetY = (viewH / 2) - ((NODE_HEIGHT * currentZoom) / 2);

    const newPanX = Math.round(targetX - (root.x * currentZoom));
    const newPanY = Math.round(targetY - (root.y * currentZoom));

    this.panX.set(newPanX);
    this.panY.set(newPanY);
  }

  fitView(): void {
    this.centerRootNode();
  }

  onMouseDown(e: MouseEvent): void {
    if ((e.target as HTMLElement).closest('.n8n-node') || (e.target as HTMLElement).closest('.canvas-hud-topbar')) return;
    this.isDragging = true;
    this.dragStartX = e.clientX - this.panX();
    this.dragStartY = e.clientY - this.panY();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    this.panX.set(e.clientX - this.dragStartX);
    this.panY.set(e.clientY - this.dragStartY);
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }

  onWheel(e: WheelEvent): void {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    const newZoom = Math.min(Math.max(this.zoom() * zoomFactor, 0.35), 2.2);
    this.zoom.set(Math.round(newZoom * 100) / 100);
  }

  zoomIn(): void {
    this.zoom.update(z => Math.min(Math.round((z + 0.15) * 100) / 100, 2.2));
  }

  zoomOut(): void {
    this.zoom.update(z => Math.max(Math.round((z - 0.15) * 100) / 100, 0.35));
  }

  resetZoom(): void {
    this.zoom.set(1);
    this.centerRootNode();
  }

  // --- Export Actions ---
  exportPDF(): void {
    const srv = this.allServers().find(s => s.id === this.selectedServerId());
    const serverName = srv ? srv.name : 'Servidor';
    this.exportService.exportToPDF(this.allPermissions(), serverName);
  }

  exportXLSX(): void {
    const srv = this.allServers().find(s => s.id === this.selectedServerId());
    const serverName = srv ? srv.name : 'Servidor';
    this.exportService.exportToXLSX(this.allPermissions(), serverName, this.flatFolders());
  }

  filteredPermissions(): Permission[] {
    const q = this.searchQuery().toLowerCase().trim();
    const list = this.folderPermissions().filter(p => !isExcludedAccount(p.targetName));
    if (!q) return list;
    return list.filter(p =>
      p.targetName.toLowerCase().includes(q) || (p.rawRights && p.rawRights.toLowerCase().includes(q))
    );
  }
}

