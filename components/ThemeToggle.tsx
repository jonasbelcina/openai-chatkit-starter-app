'use client';

import { Sun, Moon } from 'lucide-react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { scheme, setScheme } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setScheme(scheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors duration-200">
      {mounted && (
        scheme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )
      )}
    </button>
  );
}
