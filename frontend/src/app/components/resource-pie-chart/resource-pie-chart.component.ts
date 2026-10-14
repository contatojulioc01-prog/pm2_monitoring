import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-pie-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pie-chart-wrapper" [class.mini]="size === 'sm'">
      <svg class="pie-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient [id]="'grad-cyan-' + id" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#3b82f6" />
          </linearGradient>
          <linearGradient [id]="'grad-purple-' + id" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" />
            <stop offset="100%" stop-color="#6366f1" />
          </linearGradient>
          <linearGradient [id]="'grad-emerald-' + id" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#059669" />
          </linearGradient>
          <linearGradient [id]="'grad-amber-' + id" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>
          <linearGradient [id]="'grad-rose-' + id" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f43f5e" />
            <stop offset="100%" stop-color="#e11d48" />
          </linearGradient>
        </defs>

        <!-- Track / Free Slice Background -->
        <circle
          class="pie-track"
          cx="50"
          cy="50"
          [attr.r]="radius"
          [attr.stroke-width]="strokeWidth"
        />

        <!-- Used / Active Meter Slice -->
        <circle
          class="pie-meter"
          cx="50"
          cy="50"
          [attr.r]="radius"
          [attr.stroke-width]="strokeWidth"
          [attr.stroke]="activeGradientUrl"
          [attr.stroke-dasharray]="circumference"
          [attr.stroke-dashoffset]="dashOffset"
        />
      </svg>

      <!-- Center Content -->
      <div class="pie-center">
        <span class="pie-percent">{{ percentFormatted }}%</span>
        <span class="pie-label">{{ label }}</span>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .pie-chart-wrapper {
      position: relative;
      width: 105px;
      height: 105px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      &.mini {
        width: 75px;
        height: 75px;
      }
    }

    .pie-svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
      overflow: visible;
    }

    .pie-track {
      fill: none;
      stroke: var(--bg-chip, rgba(148, 163, 184, 0.25));
    }

    .pie-meter {
      fill: none;
      stroke-linecap: round;
      transition: stroke-dashoffset 0.35s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.2s ease;
    }

    .pie-center {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      line-height: 1;
      pointer-events: none;
    }

    .pie-percent {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.5px;
      font-family: inherit;
    }

    .pie-label {
      font-size: 0.65rem;
      color: var(--text-muted);
      margin-top: 3px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .mini .pie-percent {
      font-size: 0.9rem;
    }

    .mini .pie-label {
      font-size: 0.58rem;
    }
  `]
})
export class ResourcePieChartComponent {
  @Input() percentage = 0;
  @Input() label = 'Uso';
  @Input() colorScheme: 'purple' | 'cyan' | 'emerald' | 'amber' | 'rose' = 'purple';
  @Input() size: 'sm' | 'md' = 'md';
  @Input() id = Math.random().toString(36).substring(2, 7);

  readonly radius = 38;
  readonly strokeWidth = 11;
  readonly circumference = 2 * Math.PI * this.radius; // ≈ 238.76

  get percentFormatted(): string {
    const val = isNaN(this.percentage) ? 0 : this.percentage;
    return val % 1 === 0 ? val.toString() : val.toFixed(1);
  }

  get dashOffset(): number {
    const safePercent = Math.max(0, Math.min(100, isNaN(this.percentage) ? 0 : this.percentage));
    return this.circumference * (1 - safePercent / 100);
  }

  get activeGradientUrl(): string {
    const p = this.percentage;
    if (p >= 90) return `url(#grad-rose-${this.id})`;
    if (p >= 80) return `url(#grad-amber-${this.id})`;

    switch (this.colorScheme) {
      case 'cyan': return `url(#grad-cyan-${this.id})`;
      case 'emerald': return `url(#grad-emerald-${this.id})`;
      case 'amber': return `url(#grad-amber-${this.id})`;
      case 'rose': return `url(#grad-rose-${this.id})`;
      default: return `url(#grad-purple-${this.id})`;
    }
  }
}
