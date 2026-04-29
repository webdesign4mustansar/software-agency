/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        dark:    '#080C16',
        navy:    '#0F1629',
        'navy-light': '#1A2340',
        accent:  '#4F8EF7',
        cyan:    '#06D6C0',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.6s ease forwards',
        'pulse-slow':'pulse 3s ease-in-out infinite',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
