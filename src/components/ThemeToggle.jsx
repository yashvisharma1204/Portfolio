import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

// Resolve the initial theme: stored preference, else system.
function getInitialTheme() {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const ThemeToggle = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'dark'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
            {theme === 'dark' ? (
                <Sun className="h-4 w-4" strokeWidth={1.75} />
            ) : (
                <Moon className="h-4 w-4" strokeWidth={1.75} />
            )}
        </button>
    );
};

export default ThemeToggle;
