import { Theme } from '../models/theme';

// Головна світла тема
export const defaultTheme: Theme = {
  name: 'default',
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
};

// Темна тема
export const darkTheme: Theme = {
  name: 'dark',
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
};

// Масив усіх тем
export const themes: Theme[] = [defaultTheme, darkTheme];

// Допоміжна функція для вибору теми за назвою
export function getThemeByName(name: Theme['name']): Theme {
  return themes.find((t) => t.name === name) ?? defaultTheme;
}
