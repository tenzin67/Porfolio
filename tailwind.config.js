import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    plugins: [forms],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Noto Sans JP"', '"Inter"', 'sans-serif', ...defaultTheme.fontFamily.sans],
                mono: ['"JetBrains Mono"', 'monospace', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                japan: {
                    'off-white': '#FDFDFB', // Warmer, like rice paper
                    'beige': '#F0EEE9',
                    'light-gray': '#E5E5E5',
                    'charcoal': '#4A4A4A',
                    'ink': '#1A1A1A',
                    'stone': '#8C8C8C',
                    'sage': '#8A9A5B',
                    'indigo-muted': '#5E6A71', // Keeping for compatibility, but usage should shift to stone/ink
                }
            }
        },
    },
};
