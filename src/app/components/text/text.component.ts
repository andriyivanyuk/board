import { Component, input, computed } from '@angular/core';
import { TextAlignment } from '../../models/layout';
import { CommonModule } from '@angular/common';
import { Theme } from '../../models/theme';

@Component({
  selector: 'app-text',
  standalone: true,
  templateUrl: './text.component.html',
  imports: [CommonModule],
})
export class TextComponent {
  readonly text = input<string>();
  readonly textAlign = input<TextAlignment>();
  readonly theme = input<Theme>();

  readonly styles = computed(() => ({
    color: this.theme()!.colors.text.default,
    fontSize: this.theme()!.font.sizeBase,
    textAlign: this.textAlign() ?? 'left',
  }));
}
