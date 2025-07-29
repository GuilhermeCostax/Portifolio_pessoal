import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSystemTheme } from '@/hooks/useSystemTheme';
import { themeStorage } from '@/services/themeStorage';
import { themeDom } from '@/services/themeDom';
import type { Theme, ThemeContextType } from '@/types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

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