import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketData, Style } from '../../models/layout';

@Component({
  selector: 'app-ticket-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-item.component.html',
})
export class TicketItemComponent {
  readonly item = input<TicketData>();
  readonly size = input<{ width: string; height: string }>();
  readonly styleMap = input<{ [key: string]: Style }>();

  readonly styles = computed(() => {
    const styleId = this.item()?.styleId;
    const s = this.styleMap()?.[styleId ?? ''] ?? {};

    return {
      width: this.size()?.width,
      height: this.size()?.height,
      display: s.display ?? 'flex',
      flexDirection: s.flexDirection ?? 'row',
      justifyContent: s.justifyContent ?? 'space-between',
      alignItems: s.alignItems ?? 'center',
      padding: s.padding ?? '0 12px',
      backgroundColor: s.backgroundColor ?? 'grey',
      borderRadius: s.borderRadius ?? '8px',
      fontSize: s.fontSize ?? '16px',
      color: s.textColor ?? '#fff',
      boxSizing: s.boxSizing ?? 'border-box',
    };
  });
}
