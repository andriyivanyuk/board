// ticket-list.component.ts
import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketItemComponent } from '../ticket-item/ticket-item.component';
import {
  TicketListComponent as TicketListData,
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

  readonly rows = computed(() => this.layout()!.rows ?? 1);
  readonly columns = computed(() => this.layout()!.columns ?? 1);
  readonly gap = computed(() => parseInt(this.layout()!.gap ?? '0', 10));

  readonly direction = computed(() =>
    this.layout()!.listOrientation === 'horizontal' ? 'row' : 'column'
  );

  readonly itemWidth = computed(() => {
    const total = parseInt(this.layout()!.style?.width ?? '0', 10);
    const gaps = (this.columns() - 1) * this.gap();
    return (total - gaps) / this.columns();
  });

  readonly itemHeight = computed(() => {
    const total = parseInt(this.layout()!.style?.height ?? '0', 10);
    const gaps = (this.rows() - 1) * this.gap();
    return (total - gaps) / this.rows();
  });

  readonly items = computed<TicketData[]>(() => this.layout()!.items ?? []);

  readonly styles = computed(() => ({
    display: 'flex',
    flexDirection: this.direction(),
    gap: this.gap() + 'px',
    width: this.layout()!.style?.width,
    height: this.layout()!.style?.height,
  }));
}
