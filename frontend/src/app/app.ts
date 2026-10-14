import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ThemeService } from './services/theme.service';
import { AuthService } from './services/auth.service';
import { ToastService } from './services/toast.service';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    ToastContainerComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  public theme = inject(ThemeService);
  public auth = inject(AuthService);
  private toast = inject(ToastService);

  avatarError = signal<boolean>(false);

  constructor() {
    effect(() => {
      const url = this.auth.avatarUrl();
      if (url) {
        this.avatarError.set(false);
      }
    });
  }

  async ngOnInit(): Promise<void> {
    this.theme.init();
    await this.auth.init();
  }

  onAvatarError(): void {
    this.avatarError.set(true);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  handleLogout(): void {
    this.auth.logout();
  }
}
