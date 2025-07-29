import React, { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { actualTheme } = useTheme();

  useEffect(() => {
    // Add smooth transition class to body during theme changes
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    // Add transition to all elements with background or border colors
    const style = document.createElement('style');
    style.textContent = `
      * {
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease !important;
      }
      
      /* Smooth transitions for specific elements */
      .theme-transition {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
      
      /* Prevent flash during theme change */
      .theme-changing {
        transition: none !important;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // Add a brief class to prevent flash during theme change
    document.documentElement.classList.add('theme-changing');
    
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('theme-changing');
    }, 50);
    
    return () => clearTimeout(timer);
  }, [actualTheme]);

  return <>{children}</>;
};

export default ThemeTransition;