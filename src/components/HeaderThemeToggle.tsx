import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const HeaderThemeToggle: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(actualTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  const isDark = theme === 'dark' || (theme === 'system' && actualTheme === 'dark');

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-14 h-7 rounded-full transition-all duration-500 ease-out",
        "bg-gradient-to-r border border-white/30 shadow-lg hover:shadow-xl",
        "hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2",
        isDark 
          ? "from-indigo-600 to-purple-700 focus:ring-purple-500/50" 
          : "from-amber-400 to-orange-500 focus:ring-amber-500/50"
      )}
      aria-label="Alternar tema"
    >
      {/* Switch Background Glow */}
      <div className={cn(
        "absolute inset-0 rounded-full transition-opacity duration-500",
        isDark 
          ? "bg-gradient-to-r from-indigo-500/20 to-purple-600/20" 
          : "bg-gradient-to-r from-amber-300/20 to-orange-400/20"
      )} />
      
      {/* Switch Slider */}
      <div className={cn(
        "absolute top-0.5 w-6 h-6 rounded-full transition-all duration-500 ease-out",
        "bg-white shadow-lg flex items-center justify-center",
        "transform",
        isDark ? "translate-x-7" : "translate-x-0.5"
      )}>
        {/* Icon Container */}
        <div className={cn(
          "transition-all duration-500 ease-out",
          isDark ? "rotate-0 scale-100" : "rotate-180 scale-90"
        )}>
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-indigo-600" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          )}
        </div>
      </div>
      
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun className={cn(
          "w-3 h-3 transition-all duration-500",
          isDark ? "text-white/40 scale-90" : "text-white scale-100"
        )} />
        <Moon className={cn(
          "w-3 h-3 transition-all duration-500",
          isDark ? "text-white scale-100" : "text-white/40 scale-90"
        )} />
      </div>
    </button>
  );
};

export default HeaderThemeToggle;