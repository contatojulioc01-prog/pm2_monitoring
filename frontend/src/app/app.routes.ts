import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pm2', pathMatch: 'full' },
  {
    path: 'pm2',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'servers',
    loadComponent: () =>
      import('./features/servers/servers.component').then(m => m.ServersComponent)
  },
  {
    path: 'folders',
    loadComponent: () =>
      import('./features/folders/folders.component').then(m => m.FoldersComponent)
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/users.component').then(m => m.UsersComponent)
  },
  {
    path: 'groups',
    redirectTo: 'folders',
    pathMatch: 'full'
  },
  {
    path: 'monitoramento',
    loadComponent: () =>
      import('./features/monitoramento/monitoramento.component').then(m => m.MonitoramentoComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/monitoramento/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'monitors/:id',
        loadComponent: () =>
          import('./features/monitoramento/monitor-detail/monitor-detail.component').then(m => m.MonitorDetailComponent)
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./features/monitoramento/notifications/notifications.component').then(m => m.NotificationsComponent)
      },
      {
        path: 'maintenances',
        loadComponent: () =>
          import('./features/monitoramento/maintenances/maintenances.component').then(m => m.MaintenancesComponent)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/monitoramento/settings/settings.component').then(m => m.SettingsComponent)
      }
    ]
  },
  { path: '**', redirectTo: 'pm2' }
];
