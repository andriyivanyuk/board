import { Component, input, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Style } from '../../models/layout';
import { Theme } from '../../models/theme';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
})
export class BackgroundComponent implements OnInit {
  readonly theme = input<Theme>();
  readonly style = input<Style>();

  readonly styles = computed(() => ({
    backgroundColor: this.theme()!.header['background'].backgroundColor,
    height: this.theme()!.header['background'].height,
  }));

  ngOnInit(): void {
    console.log(this.theme());
  }
}
