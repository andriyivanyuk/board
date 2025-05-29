import { Theme } from '../models/theme';

// Головна світла тема
export const defaultTheme: Theme = {
  name: 'default',
  header: {
    background: {
      backgroundColor: 'red',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '64px',
      zIndex: 0,
    },
  },
  colors: {
    background: '#ffffff',
    foreground: '#f5f5f5',
    primary: '#007bff',
    text: {
      default: 'green',
      contrast: '#ffffff',
      subdued: '#666666',
    },
  },
  font: {
    sizeBase: '16px',
  },
  borderRadius: '8px',
  ticketItemStyles: {
    green: {
      backgroundColor: '#d4edda',
      textColor: '#155724',
      fontSize: '18px',
    },
    gray: {
      backgroundColor: '#e2e3e5',
      textColor: '#383d41',
    },
    yellow: {
      backgroundColor: '#fff3cd',
      textColor: '#856404',
    },
  },
};

// Темна тема
export const darkTheme: Theme = {
  name: 'dark',
  header: {
    background: {
      backgroundColor: 'red',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '64px',
      zIndex: 0,
    },
  },
  colors: {
    background: '#121212',
    foreground: '#1e1e1e',
    primary: '#bb86fc',
    text: {
      default: 'black',
      contrast: '#000000',
      subdued: '#aaaaaa',
    },
  },
  font: {
    sizeBase: '16px',
  },
  borderRadius: '8px',
  ticketItemStyles: {
    green: {
      backgroundColor: '#d4edda',
      textColor: '#155724',
      fontSize: '18px',
    },
    gray: {
      backgroundColor: '#e2e3e5',
      textColor: '#383d41',
    },
    yellow: {
      backgroundColor: '#fff3cd',
      textColor: '#856404',
    },
  },
};

// Масив усіх тем
export const themes: Theme[] = [defaultTheme, darkTheme];

// Допоміжна функція для вибору теми за назвою
export function getThemeByName(name: Theme['name']): Theme {
  return themes.find((t) => t.name === name) ?? defaultTheme;
}
