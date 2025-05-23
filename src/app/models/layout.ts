import { Theme } from './theme';

export type TextAlignment = 'left' | 'right' | 'center';

export interface Style {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  width?: string;
  height?: string;
  zIndex?: number;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  fontSize?: string;
  textColor?: string;
  textAlign?: TextAlignment;
}

export type ComponentType =
  | 'text'
  | 'clock'
  | 'html'
  | 'logo'
  | 'ticket-list'
  | 'counter-list'
  | 'single-ticket-display'
  | 'info-article'
  | 'news-ticker';

export interface ItemTemplateProperties {
  templateId: string;
  contentSize?: 'small' | 'medium' | 'large';
  colorScheme?: string;
}

export interface BaseComponent {
  id: string;
  name: string;
  type: ComponentType;

  style?: Style;

  grid?: {
    row: number;
    column: number;
    rowSpan?: number;
    colSpan?: number;
  };
}

export interface TextComponent extends BaseComponent {
  type: 'text' | 'clock';
  text?: string;
}

export interface HtmlComponent extends BaseComponent {
  type: 'html';
  html: string;
}

export interface LogoComponent extends BaseComponent {
  type: 'logo';
}

export interface TicketData {
  value: string;
  status?: string;
}

export interface ListComponent extends BaseComponent {
  type: 'ticket-list' | 'counter-list';
  listOrientation: 'horizontal' | 'vertical';
  items: TicketData[];
  itemTemplate: ItemTemplateProperties;
  gap?: string;
  columns?: number;
  rows?: number;
  overflow?: 'auto-scroll' | 'hidden';
  newItemAnimation?: 'slide';
  newItemDirection?: 'from-start' | 'from-end';
}

export interface TicketListComponent extends ListComponent {
  type: 'ticket-list';
}

export interface CounterListComponent extends ListComponent {
  type: 'counter-list';
}

export interface SingleTicketDisplayComponent extends BaseComponent {
  type: 'single-ticket-display';
  dataSource: string;
  itemTemplate: ItemTemplateProperties;
}

export interface InfoArticleComponent extends BaseComponent {
  type: 'info-article';
  items: {
    type: 'image' | 'video';
    showTime?: number;
    url: string;
  }[];
}

export interface NewsTickerComponent extends BaseComponent {
  type: 'news-ticker';
  items: string[];
  gap?: string;
  textSize: string;
}

export type Component =
  | TextComponent
  | HtmlComponent
  | LogoComponent
  | ListComponent
  | SingleTicketDisplayComponent
  | InfoArticleComponent
  | NewsTickerComponent;

export interface LayoutGrid {
  columns: number;
  rows: number;
  gap?: string;
}

export interface Layout {
  name: string;
  width: string;
  height: string;
  theme: Theme['name'];
  customThemeUrl?: string;
  editorGridSize?: string;
  layoutGrid?: LayoutGrid;
  components: Component[];
}
