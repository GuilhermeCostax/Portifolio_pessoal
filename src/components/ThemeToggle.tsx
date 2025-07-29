import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'system':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  const themes = [
    {
      value: 'light' as const,
      label: 'Claro',
      icon: <Sun className="h-4 w-4" />,
    },
    {
      value: 'dark' as const,
      label: 'Escuro',
      icon: <Moon className="h-4 w-4" />,
    },
    {
      value: 'system' as const,
      label: 'Sistema',
      icon: <Monitor className="h-4 w-4" />,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-9 w-9 p-0 transition-all duration-300 hover:scale-110 hover:bg-accent",
            "border border-border/50 hover:border-primary/50",
            "focus:ring-2 focus:ring-primary/20 focus:outline-none"
          )}
          aria-label="Alternar tema"
        >
          <div className="transition-transform duration-300 hover:rotate-12">
            {getIcon()}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-40 border border-border/50 bg-background/95 backdrop-blur-sm"
      >
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={cn(
              "flex items-center gap-2 cursor-pointer transition-all duration-200",
              "hover:bg-accent hover:text-accent-foreground",
              "focus:bg-accent focus:text-accent-foreground",
              theme === themeOption.value && "bg-primary/10 text-primary font-medium"
            )}
          >
            <span className="transition-transform duration-200 group-hover:scale-110">
              {themeOption.icon}
            </span>
            <span>{themeOption.label}</span>
            {theme === themeOption.value && (
              <div className="ml-auto h-2 w-2 rounded-full bg-primary animate-pulse" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;