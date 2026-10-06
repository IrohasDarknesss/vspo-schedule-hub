/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vspo: {
          orange: {
            DEFAULT: '#FF5E00',
            hover: '#FF7A29',
            light: '#FFA366',
            dark: '#D94E00',
            glow: 'rgba(255, 94, 0, 0.4)',
          },
          cyan: {
            DEFAULT: '#00F0FF',
            hover: '#33F3FF',
            dark: '#00A8B3',
            glow: 'rgba(0, 240, 255, 0.35)',
          },
          pink: {
            DEFAULT: '#FF4687',
            hover: '#FF6EA2',
            light: '#FFA3C2',
            glow: 'rgba(255, 70, 135, 0.45)',
          },
          dark: {
            950: '#07090E',
            900: '#0C1017',
            850: '#111722',
            800: '#17202F',
            750: '#1F2A3D',
            700: '#2A374F',
            600: '#3D4F6F',
            500: '#5F7397',
          },
        }
      },
      fontFamily: {
        gaming: ['"Chakra Petch"', '"Rajdhani"', 'system-ui', 'sans-serif'],
        sans: [
          '"Inter"',
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"BIZ UDPGothic"',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glow-orange': '0 0 20px -3px rgba(255, 70, 135, 0.45)',
        'glow-cyan': '0 0 20px -3px rgba(0, 240, 255, 0.35)',
        'glow-pink': '0 0 20px -3px rgba(255, 70, 135, 0.45)',
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
