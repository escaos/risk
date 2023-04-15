/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        gray: {
          50: '#f9fafb',
          100: '#f4f5f7',
          200: '#e5e7eb',
          300: '#d2d6dc',
          400: '#9fa6b2',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#252f3f',
        },
        // Main colors
        primary: {
          DEFAULT: '#09eab4', // light mode
          dark: '#93fcec', // dark mode
        },
        secondary: {
          DEFAULT: '#0c3c4c', // light mode
          dark: '#7a7985', // dark mode
        },
        neutral: {
          DEFAULT: '#bcbabc', // light mode
          dark: '#2c2443', // dark mode
        },
        // Component colors
        background: {
          DEFAULT: '#f9fafb', // light mode
          dark: '#1E2641', // dark mode
        },
        card: {
          DEFAULT: '#fff', // light mode
          dark: '#2d3748', // dark mode
        },
        button: {
          primary: {
            DEFAULT: '#09eab4', // light mode
            dark: '#93fcec', // dark mode
          },
          secondary: {
            DEFAULT: '#7a7985', // light mode
            dark: '#0c3c4c', // dark mode
          },
        },
        icon: {
          DEFAULT: '#7a7985', // light mode
          dark: '#bcbabc', // dark mode
        },
        text: {
          primary: {
            DEFAULT: '#1E2641', // light mode
            dark: '#f9fafb', // dark mode
          },
          secondary: {
            DEFAULT: '#7a7985', // light mode
            dark: '#bcbabc', // dark mode
          },
        },
      },
    },
  },
  plugins: [],
};
