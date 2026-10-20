import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token();

  let url = req.url;

  // Ajusta prefixo para /pm2-manager ou /doce-manager caso esteja rodando sob proxy reverso do IIS
  if (typeof window !== 'undefined' && url.startsWith('/api')) {
    const p = window.location.pathname;
    if (p.startsWith('/pm2-manager') && !url.startsWith('/pm2-manager')) {
      url = '/pm2-manager' + url;
    } else if (p.startsWith('/doce-manager') && !url.startsWith('/doce-manager')) {
      url = '/doce-manager' + url;
    }
  }

  const setHeaders: Record<string, string> = {};
  if (token && !req.headers.has('Authorization')) {
    setHeaders['Authorization'] = `Bearer ${token}`;
  }

  const authReq = req.clone({
    url,
    setHeaders
  });

  return next(authReq);
};
