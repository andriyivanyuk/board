import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Layout,
  Component as LayoutComponent,
  TextComponent,
  ListComponent,
} from '../../models/layout';
import { getThemeByName } from '../../data/themes';

import { TextComponent as TextRenderer } from '../text/text.component';
import { TicketListComponent as TicketListRenderer } from '../ticket-list/ticket-list.component';

@Component({
  selector: 'app-layout-renderer',
  standalone: true,
  imports: [CommonModule, TextRenderer, TicketListRenderer],
  templateUrl: './layout-renderer.component.html',
})
export class LayoutRendererComponent {
  readonly layout = input<Layout>();
  readonly theme = computed(() => getThemeByName(this.layout()!.theme));
  readonly components = computed(() => this.layout()!.components);

  readonly renderableComponents = computed(() =>
    this.components().map((component: any) => {
      const style = { ...component.style };

      if (component.grid) {
        Object.assign(style, {
          gridRow: `${component.grid.row} / span ${
            component.grid.rowSpan ?? 1
          }`,
          gridColumn: `${component.grid.column} / span ${
            component.grid.colSpan ?? 1
          }`,
        });
      }

      return { component, style };
    })
  );
}
