import { Component, computed, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../models/theme';
import { LogoComponent as LogoData } from '../../models/layout';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  readonly theme = input<Theme>();
  readonly logo = input<LogoData>();
}
