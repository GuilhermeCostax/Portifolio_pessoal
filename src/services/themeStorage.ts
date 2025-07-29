import { Theme } from '@/types/theme';
import { CONFIG } from '@/constants/config';

export const themeStorage = {
  get: (): Theme => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(CONFIG.THEME_STORAGE_KEY) as Theme) || 'system';
    }
    return 'system';
  },

  set: (theme: Theme): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONFIG.THEME_STORAGE_KEY, theme);
    }
  },

  remove: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(CONFIG.THEME_STORAGE_KEY);
    }
  },
};