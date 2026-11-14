/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './projects/**/*.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4f9',
          100: '#d9e3f0',
          200: '#b3c8e1',
          300: '#7ea0c8',
          400: '#4d78ad',
          500: '#2d5a8e',
          600: '#1e4474',
          700: '#14325a',
          800: '#0d2240',
          900: '#071628',
          950: '#040e1c',
        },
        gold: {
          400: '#c9a84c',
          500: '#b8942d',
          600: '#9a7a1f',
        }
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '0.875rem' }],
        '3xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      borderRadius: {
        'xs': '0.125rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
