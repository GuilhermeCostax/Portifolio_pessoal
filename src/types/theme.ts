export type Theme = 'light' | 'dark' | 'system';
export type ActualTheme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: ActualTheme;
}