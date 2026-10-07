import React, { useEffect, useState } from 'react';
import { ThemeContext } from './theme-context';
import { useSystemTheme } from '@/hooks/useSystemTheme';
import { themeStorage } from '@/services/themeStorage';
import { themeDom } from '@/services/themeDom';
import type { Theme } from '@/types/theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => themeStorage.get());

  const systemTheme = useSystemTheme();
  const actualTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    themeDom.applyTheme(actualTheme);
    themeStorage.set(theme);
  }, [theme, actualTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
