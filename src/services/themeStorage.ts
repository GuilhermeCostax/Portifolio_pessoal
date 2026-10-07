import type { Theme } from '@/types/theme';
import { CONFIG } from '@/constants/config';

export const themeStorage = {
  get: (): Theme => {
    try {
      const value = localStorage.getItem(CONFIG.THEME_STORAGE_KEY);
      return value === 'light' || value === 'dark' || value === 'system' ? value : 'system';
    } catch { return 'system'; }
  },
  set: (theme: Theme): void => {
    try { localStorage.setItem(CONFIG.THEME_STORAGE_KEY, theme); } catch { /* Tema continua ativo sem persistência. */ }
  },
};
