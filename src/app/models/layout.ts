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
  position?: string;
  backgroundColor?: string;
  borderRadius?: string;
  fontSize?: string;
  textColor?: string;
  textAlign?: TextAlignment;
  marginLeft?: string;

  display?: 'flex' | 'grid';
  flexDirection?: 'row' | 'column';
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;

  boxSizing?: 'border-box' | 'content-box';
}

// Типи компонентів
export type ComponentType =
  | 'container'
  | 'text'
  | 'clock'
  | 'html'
  | 'logo'
  | 'ticket-list'
  | 'counter-list'
  | 'single-ticket-display'
  | 'info-article'
  | 'news-ticker'
  | 'background';

// Шаблон для рендерингу айтемів
export interface ItemTemplateProperties {
  templateId: string;
  contentSize?: 'small' | 'medium' | 'large';
  colorScheme?: string;
}

// Базовий інтерфейс для всіх компонентів
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

export interface ContainerComponent extends BaseComponent {
  type: 'container';
  direction?: 'row' | 'column' | 'grid';
  gap?: string;
  padding?: string;
  columns?: number;
  rows?: number;
  children: Component[];
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
  path: string;
  type: 'logo';
}

export interface TicketData {
  value: string;
  status: string;
  styleId?: string; // посилання на стиль
}

export interface TicketItemStyleMap {
  [id: string]: Style;
}

export interface ListComponent extends BaseComponent {
  type: 'ticket-list' | 'counter-list';
  listOrientation: 'horizontal' | 'vertical';
  dataSource?: string;
  itemTemplate: ItemTemplateProperties;
  gap?: string;
  columns?: number;
  rows?: number;
  overflow?: 'auto-scroll' | 'hidden';
  newItemAnimation?: 'slide';
  newItemDirection?: 'from-start' | 'from-end';
  items?: TicketData[];
}

export interface SingleTicketDisplayComponent extends BaseComponent {
  type: 'single-ticket-display';
  dataSource: string;
  itemTemplate: ItemTemplateProperties;
}

export interface BackgroundComponent extends BaseComponent {
  type: 'background';
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
  | NewsTickerComponent
  | ContainerComponent
  | BackgroundComponent;

// Тема
export interface Theme {
  name: 'default' | 'dark' | 'custom';
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  badgeColor?: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    text: {
      default: string;
      contrast: string;
      subdued: string;
    };
  };
  font: {
    sizeBase: string;
  };
  borderRadius: string;
}

export interface Layout {
  name: string;
  width: string;
  height: string;
  theme: Theme['name'];
  customThemeUrl?: string;
  editorGridSize?: string;
  components: Component[];
  style?: Style;
}
