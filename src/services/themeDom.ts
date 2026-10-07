import type { ActualTheme } from '@/types/theme';

export const themeDom = {
  applyTheme: (actualTheme: ActualTheme): void => {
    const root = window.document.documentElement;

    // Remove all theme classes first
    root.classList.remove('light', 'dark');

    // Add the current theme class
    root.classList.add(actualTheme);

    // Set color-scheme for better browser integration
    root.style.colorScheme = actualTheme;
  },

  removeTheme: (): void => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.style.removeProperty('color-scheme');
  }
};
