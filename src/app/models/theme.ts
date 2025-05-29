import { Style } from './layout';

export interface Theme {
  name: 'default' | 'dark' | 'custom';
  header: {
    [key: string]: Style;
  };
  colors: {
    background: string;
    foreground: string;
    primary: string;
    accent?: string;
    success?: string;
    warning?: string;
    error?: string;
    badge?: string;
    text: {
      default: string;
      contrast: string;
      subdued: string;
    };
  };
  font: {
    sizeBase: string;
    sizeSmall?: string;
    sizeLarge?: string;
    family?: string;
  };
  ticketItemStyles?: {
    [key: string]: Style;
  };

  borderRadius: string;
}
