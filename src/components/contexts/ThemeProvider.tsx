// src/components/contexts/ThemeProvider.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';
import type { ThemeMode } from './ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((themeMode: ThemeMode) => {
    const htmlElement = document.documentElement;

    if (themeMode === 'dark') {
      htmlElement.classList.add('dark');
      htmlElement.style.colorScheme = 'dark';
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.style.colorScheme = 'light';
    }

    localStorage.setItem('theme', themeMode);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      return newTheme;
    });
  }, [applyTheme]);

  if (!mounted) {
    // still provide context so useTheme never hits "undefined"
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
