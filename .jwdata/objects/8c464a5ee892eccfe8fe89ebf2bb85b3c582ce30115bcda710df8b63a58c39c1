import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from './toast.service';

export interface SsoRole {
  id?: string;
  name: string;
}

export interface SsoPermission {
  id?: string;
  name: string;
}

export interface SsoDepartment {
  id?: string;
  name: string;
}

export interface SsoUser {
  id: string;
  name: string;
  email: string;
  avatar?: string | null;
  departamentId?: string | null;
  departamentName?: string | null;
  departament?: SsoDepartment | null;
  roles?: (string | SsoRole)[];
  permissions?: (string | SsoPermission)[];
}

export interface SsoConfig {
  ssoEnabled: boolean;
  ssoUrl: string;
  portalUrl: string;
}

export interface SsoLoginResponse {
  success: boolean;
  token?: string;
  user?: SsoUser;
  error?: string;
  message?: string;
}

const STORAGE_TOKEN_KEY = 'dc_pm2_sso_token';
const STORAGE_USER_KEY = 'dc_pm2_sso_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private toast = inject(ToastService);

  // State Signals
  currentUser = signal<SsoUser | null>(null);
  token = signal<string | null>(null);
  ssoAvatar = signal<string | null>(null);
  isLoading = signal<boolean>(false);
  isInitializing = signal<boolean>(true);
  authError = signal<string | null>(null);
  ssoConfig = signal<SsoConfig | null>(null);

  // Computed
  isAuthenticated = computed(() => !!this.currentUser());

  avatarUrl = computed(() => {
    const direct = this.ssoAvatar();
    if (direct) return direct;
    const user = this.currentUser();
    if (user?.avatar) {
      return this.normalizeAvatarUrl(user.avatar);
    }
    return null;
  });

  userRoles = computed(() => {
    const user = this.currentUser();
    if (!user || !user.roles) return [];
    return user.roles.map(r => (typeof r === 'string' ? r : r.name));
  });

  departmentName = computed(() => {
    const user = this.currentUser();
    if (!user) return '';
    return user.departamentName || user.departament?.name || '';
  });

  private get API(): string {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/pm2-manager')) {
      return '/pm2-manager/api';
    }
    const base = document.querySelector('base')?.getAttribute('href') ?? '/';
    return base.replace(/\/$/, '') + '/api';
  }

  private initPromise: Promise<boolean> | null = null;

  /**
   * Inicializa o fluxo de autenticação SSO:
   * 1. Verifica parâmetro ?ticket= ou ?token= na URL de entrada.
   * 2. Sanitiza a barra de navegação sem poluir a URL.
   * 3. Valida com o backend ou restaura a sessão ativa localmente.
   */
  init(): Promise<boolean> {
    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = (async () => {
      this.isInitializing.set(true);
      this.authError.set(null);
      this.loadSsoConfig();

      const urlParams = new URLSearchParams(window.location.search);
      const ticket = urlParams.get('ticket') || urlParams.get('token');

      if (ticket) {
        // Remove o parâmetro de ticket da URL imediatamente por segurança e estética
        const cleanUrl = window.location.pathname + (window.location.hash || '');
        window.history.replaceState({}, document.title, cleanUrl);

        const success = await this.loginWithTicket(ticket);
        if (success) {
          this.fetchSsoAvatar();
        }
        this.isInitializing.set(false);
        return success;
      }

      // Se não há ticket na URL, tenta restaurar a sessão existente no localStorage
      const success = await this.restoreSession();
      if (success) {
        this.fetchSsoAvatar();
      }
      this.isInitializing.set(false);
      return success;
    })();

    return this.initPromise;
  }

  /**
   * Normaliza a URL do avatar para garantir que caminhos relativos (/uploads/...)
   * apontem para o host SSO http://192.168.13.244
   */
  normalizeAvatarUrl(avatar?: string | null): string | null {
    if (!avatar) return null;
    let trimmed = String(avatar).trim().replace(/\\/g, '/');
    if (!trimmed) return null;

    if (/^(https?:\/\/|data:image\/)/i.test(trimmed)) {
      return trimmed;
    }

    const cleanPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    return `http://192.168.13.244${cleanPath}`;
  }

  /**
   * Puxa a foto de perfil diretamente do endpoint SSO http://192.168.13.244/api/auth/me (propriedade "avatar")
   */
  async fetchSsoAvatar(): Promise<string | null> {
    // 1. Tenta buscar diretamente do endpoint SSO http://192.168.13.244/api/auth/me
    try {
      const headers: Record<string, string> = {
        'Accept': 'application/json'
      };
      const token = this.token();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const res = await fetch('http://192.168.13.244/api/auth/me', {
        method: 'GET',
        credentials: 'include',
        headers
      });

      if (res.ok) {
        const data = await res.json().catch(() => null);
        if (data) {
          const rawAvatar = data.avatar ?? data.data?.avatar ?? data.user?.avatar ?? data.data?.user?.avatar;
          if (rawAvatar && typeof rawAvatar === 'string') {
            const normalized = this.normalizeAvatarUrl(rawAvatar);
            if (normalized) {
              this.ssoAvatar.set(normalized);
              this.updateCurrentUserAvatar(normalized);
              return normalized;
            }
          }
        }
      }
    } catch (e) {
      // Falha direta (ex: restrição CORS em desenvolvimento local)
    }

    // 2. Se a chamada direta pelo navegador falhar, busca via rota de backend /api/auth/sso-avatar
    try {
      const res = await this.http.get<{ success: boolean; avatar?: string }>(`${this.API}/auth/sso-avatar`).toPromise();
      if (res && res.success && res.avatar) {
        const normalized = this.normalizeAvatarUrl(res.avatar);
        if (normalized) {
          this.ssoAvatar.set(normalized);
          this.updateCurrentUserAvatar(normalized);
          return normalized;
        }
      }
    } catch (e) { }

    return null;
  }

  private updateCurrentUserAvatar(avatarUrl: string): void {
    const user = this.currentUser();
    if (user && user.avatar !== avatarUrl) {
      const updated = { ...user, avatar: avatarUrl };
      this.currentUser.set(updated);
      try {
        localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(updated));
      } catch (e) { }
    }
  }

  /**
   * Envia o ticket para o backend validar com o SSO via X-Api-Key
   */
  async loginWithTicket(ticket: string): Promise<boolean> {
    this.isLoading.set(true);
    this.authError.set(null);
    try {
      const response = await this.http.post<SsoLoginResponse>(`${this.API}/auth/sso-login`, { ticket }).toPromise();

      if (response && response.success && response.user && response.token) {
        this.setSession(response.token, response.user);
        this.toast.success(`Autenticado com sucesso! Bem-vindo, ${response.user.name}.`);
        return true;
      } else {
        const errorMsg = response?.error || 'Não foi possível validar seu ticket de acesso SSO.';
        this.authError.set(errorMsg);
        this.toast.error(errorMsg);
        return false;
      }
    } catch (err: any) {
      const msg = err?.error?.error || err?.error?.message || 'Falha ao autenticar com o SSO.';
      this.authError.set(msg);
      this.toast.error(msg);
      return false;
    } finally {
      this.isLoading.set(false);
    }
  }

  /**
   * Restaura os dados de sessão do storage e valida no backend
   */
  private async restoreSession(): Promise<boolean> {
    try {
      const storedToken = localStorage.getItem(STORAGE_TOKEN_KEY);
      const storedUser = localStorage.getItem(STORAGE_USER_KEY);

      if (storedToken && storedUser) {
        this.token.set(storedToken);
        const parsedUser: SsoUser = JSON.parse(storedUser);
        if (parsedUser.avatar) {
          parsedUser.avatar = this.normalizeAvatarUrl(parsedUser.avatar);
          this.ssoAvatar.set(parsedUser.avatar);
        }
        this.currentUser.set(parsedUser);

        // Valida ativamente a validade do token no backend
        const res = await this.http.get<{ success: boolean; user: SsoUser }>(`${this.API}/auth/me`).toPromise();
        if (res && res.success && res.user) {
          if (res.user.avatar) {
            res.user.avatar = this.normalizeAvatarUrl(res.user.avatar);
            this.ssoAvatar.set(res.user.avatar);
          }
          this.currentUser.set(res.user);
          localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(res.user));
          this.fetchSsoAvatar();
          return true;
        } else {
          this.clearSession();
          this.authError.set('Sessão expirada. Acesse novamente pelo Portal SSO.');
          return false;
        }
      }
    } catch (e: any) {
      this.clearSession();
      if (localStorage.getItem(STORAGE_TOKEN_KEY)) {
        this.authError.set('Sua sessão expirou ou não é válida.');
      }
      return false;
    }
    return false;
  }

  private setSession(token: string, user: SsoUser): void {
    if (user.avatar) {
      user.avatar = this.normalizeAvatarUrl(user.avatar);
      this.ssoAvatar.set(user.avatar);
    }
    this.token.set(token);
    this.currentUser.set(user);
    try {
      localStorage.setItem(STORAGE_TOKEN_KEY, token);
      localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
    } catch (e) { }
    this.fetchSsoAvatar();
  }

  private clearSession(): void {
    this.token.set(null);
    this.currentUser.set(null);
    this.ssoAvatar.set(null);
    try {
      localStorage.removeItem(STORAGE_TOKEN_KEY);
      localStorage.removeItem(STORAGE_USER_KEY);
    } catch (e) { }
  }

  private loadSsoConfig(): void {
    this.http.get<{ success: boolean; ssoEnabled: boolean; ssoUrl: string; portalUrl: string }>(`${this.API}/auth/config`).subscribe({
      next: (res) => {
        if (res && res.success) {
          this.ssoConfig.set({
            ssoEnabled: res.ssoEnabled,
            ssoUrl: res.ssoUrl,
            portalUrl: res.portalUrl
          });
        }
      },
      error: () => { }
    });
  }

  /**
   * Realiza logout da aplicação
   */
  logout(): void {
    const user = this.currentUser();
    this.http.post(`${this.API}/auth/logout`, {}).subscribe({
      next: () => { },
      error: () => { }
    });

    this.clearSession();
    this.toast.info(user ? `Até logo, ${user.name}!` : 'Sessão encerrada.');
  }

  /**
   * Redireciona para o Portal SSO caso configurado
   */
  goToPortal(): void {
    const config = this.ssoConfig();
    const portalUrl = config?.portalUrl || 'http://docebrinquedo.local';
    window.location.href = portalUrl;
  }

  /**
   * Retorna as iniciais do nome do usuário para avatar fallback
   */
  getUserInitials(name?: string): string {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
}
