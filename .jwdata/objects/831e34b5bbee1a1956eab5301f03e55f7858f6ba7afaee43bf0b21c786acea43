import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface ConfirmData {
  title: string;
  message: string;
  danger?: boolean;
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="confirm-dialog">
      <div class="confirm-icon" [class.danger]="data.danger">
        <mat-icon>{{ data.danger ? 'warning' : 'help_outline' }}</mat-icon>
      </div>
      <h3 class="confirm-title">{{ data.title }}</h3>
      <p class="confirm-msg">{{ data.message }}</p>
      <div class="confirm-actions">
        <button mat-stroked-button mat-dialog-close [value]="false" (click)="close(false)">Cancelar</button>
        <button mat-flat-button [color]="data.danger ? 'warn' : 'primary'" (click)="close(true)">Confirmar</button>
      </div>
    </div>
  `,
  styles: [`
    .confirm-dialog {
      padding: 28px;
      text-align: center;
      max-width: 380px;
    }
    .confirm-icon {
      width: 52px; height: 52px;
      border-radius: 50%;
      background: #f1f5f9;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 16px;
      mat-icon { font-size: 26px; color: #64748b; }
      &.danger {
        background: #fee2e2;
        mat-icon { color: #dc2626; }
      }
    }
    .confirm-title {
      margin: 0 0 8px;
      font-size: 1.1rem;
      font-weight: 700;
    }
    .confirm-msg {
      margin: 0 0 24px;
      font-size: 0.9rem;
      color: #64748b;
    }
    .confirm-actions {
      display: flex; gap: 10px; justify-content: center;
    }
  `]
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmData
  ) {}

  close(result: boolean): void {
    this.dialogRef.close(result);
  }
}
