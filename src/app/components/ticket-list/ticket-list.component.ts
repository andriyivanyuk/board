import { Component, computed, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketItemComponent } from '../ticket-item/ticket-item.component';
import {
  ListComponent as TicketListData,
  TicketData,
} from '../../models/layout';
import { Theme } from '../../models/theme';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, TicketItemComponent],
  templateUrl: './ticket-list.component.html',
})
export class TicketListComponent {
  readonly layout = input<TicketListData>();
  readonly theme = input<Theme>();

  readonly rows = computed(() => this.layout()?.rows ?? 1);
  readonly columns = computed(() => this.layout()?.columns ?? 1);
  readonly gap = computed(() => parseInt(this.layout()?.gap ?? '0', 10));
  readonly items = computed<TicketData[]>(() => this.layout()?.items ?? []);

  readonly itemWidth = computed(() => {
    const total = parseInt(this.layout()?.style?.width ?? '0', 10);
    const gaps = (this.columns() - 1) * this.gap();
    return (total - gaps) / this.columns();
  });

  readonly itemHeight = computed(() => {
    const total = parseInt(this.layout()?.style?.height ?? '0', 10);
    const gaps = (this.rows() - 1) * this.gap();
    return (total - gaps) / this.rows();
  });

  readonly styles = computed(() => {
    const s = this.layout()?.style ?? {};
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${this.columns()}, 1fr)`,
      gridTemplateRows: `repeat(${this.rows()}, 1fr)`,
      gap: this.gap() + 'px',
      width: s.width ?? '300px',
      height: s.height ?? '600px',
      padding: s.padding ?? '12px',
      backgroundColor: s.backgroundColor ?? '#f0f0f0',
      borderRadius: s.borderRadius ?? '8px',
      boxSizing: 'border-box',
    };
  });

  readonly itemDimensions = computed(() => {
    const s = this.layout()?.style;
    const rows = this.rows();
    const cols = this.columns();
    if (!(s?.width && s?.height && rows && cols)) return;

    const gap = this.gap();
    const width = parseInt(s.width, 10);
    const height = parseInt(s.height, 10);

    return {
      width: `${(width - (cols - 1) * gap) / cols}px`,
      height: `${(height - (rows - 1) * gap) / rows}px`,
    };
  });

  readonly styleMap = computed(() => this.theme()?.ticketItemStyles ?? {});
}
