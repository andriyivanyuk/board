// ticket-item.component.ts
import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../models/theme';

@Component({
  selector: 'app-ticket-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-item.component.html',
})
export class TicketItemComponent {
  readonly value = input<string>();
  readonly status = input<string>();
  readonly width = input<string>();
  readonly height = input<string>();
  readonly theme = input<Theme>();

  readonly styles = computed(() => ({
    width: this.width(),
    height: this.height(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
    backgroundColor: this.theme()!.colors.foreground,
    color: this.theme()!.colors.text.default,
    borderRadius: this.theme()!.borderRadius,
    fontSize: this.theme()!.font.sizeBase,
  }));
}
