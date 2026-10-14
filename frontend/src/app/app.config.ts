import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { APP_BASE_HREF } from '@angular/common';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';

export function getDynamicBaseHref(): string {
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/pm2-manager')) {
      return '/pm2-manager/';
    }
    const base = document.querySelector('base')?.getAttribute('href');
    if (base) return base;
  }
  return '/';
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: APP_BASE_HREF, useFactory: getDynamicBaseHref },
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
  ]
};
