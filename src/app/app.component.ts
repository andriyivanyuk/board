import { Component } from '@angular/core';
import { LayoutRendererComponent } from './components/layout-renderer/layout-renderer.component';
import { defaultLayout } from './data/layouts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutRendererComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly layout = defaultLayout;
}
