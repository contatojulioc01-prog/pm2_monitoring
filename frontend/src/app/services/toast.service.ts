import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _toasts = signal<Toast[]>([]);
  toasts = this._toasts.asReadonly();
  private nextId = 0;

  show(message: string, type: Toast['type'] = 'info', duration = 4000): void {
    const id = ++this.nextId;
    const toast: Toast = { id, message, type, duration };
    this._toasts.update(list => [...list, toast]);
    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }
  }

  success(msg: string) { this.show(msg, 'success'); }
  error(msg: string) { this.show(msg, 'error', 6000); }
  info(msg: string) { this.show(msg, 'info'); }
  warning(msg: string) { this.show(msg, 'warning'); }

  remove(id: number): void {
    this._toasts.update(list => list.filter(t => t.id !== id));
  }
}
