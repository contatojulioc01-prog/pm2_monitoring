import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = signal<Theme>(this.loadTheme());

  theme = this._theme.asReadonly();

  toggle(): void {
    const next: Theme = this._theme() === 'light' ? 'dark' : 'light';
    this._theme.set(next);
    this.applyTheme(next);
    localStorage.setItem('pm2-theme', next);
  }

  init(): void {
    this.applyTheme(this._theme());
  }

  private applyTheme(t: Theme): void {
    document.documentElement.setAttribute('data-theme', t);
    if (t === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  private loadTheme(): Theme {
    return (localStorage.getItem('pm2-theme') as Theme) ?? 'light';
  }
}
