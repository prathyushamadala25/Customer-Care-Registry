/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pine: {
          DEFAULT: '#0F5257',
          deep: '#0A393D',
          light: '#E4EEED',
        },
        marigold: {
          DEFAULT: '#E1A93A',
          deep: '#B9832062',
          light: '#FBF0DA',
        },
        clay: {
          DEFAULT: '#C1502E',
          light: '#F7E3DB',
        },
        ink: '#1B2430',
        paper: '#F7F4EC',
        slate: {
          DEFAULT: '#6B7280',
          light: '#EEF0F2',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'ledger-lines':
          'repeating-linear-gradient(to bottom, transparent, transparent 27px, #0F525714 28px)',
      },
    },
  },
  plugins: [],
};
