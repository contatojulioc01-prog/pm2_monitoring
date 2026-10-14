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
  { path: '**', redirectTo: 'pm2' }
];
