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
        coffee: {
          50: '#FAF6F0',
          100: '#F4EBD9',
          200: '#E7D7C1',
          300: '#D2BBA0',
          400: '#BA9B7B',
          500: '#9C7A5B',
          600: '#7F5E42',
          700: '#61442E',
          800: '#463020',
          900: '#2E1E14',
          950: '#1A100A',
        },
        crema: {
          50: '#FDFBF7',
          100: '#F7F2EA',
          200: '#EFE6DA',
          300: '#E2D3C0',
          400: '#D1BDA4',
          500: '#B89F82',
        },
        caramel: {
          light: '#E6A76E',
          DEFAULT: '#C88346',
          dark: '#A35E26',
        },
        leaf: {
          light: '#7FA075',
          DEFAULT: '#5D7E54',
          dark: '#445E3D',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(46, 30, 20, 0.06), 0 2px 6px -1px rgba(46, 30, 20, 0.04)',
        'warm-lg': '0 12px 30px -4px rgba(46, 30, 20, 0.1), 0 4px 12px -2px rgba(46, 30, 20, 0.05)',
        'warm-xl': '0 20px 45px -8px rgba(46, 30, 20, 0.16), 0 8px 18px -4px rgba(46, 30, 20, 0.08)',
        'inner-warm': 'inset 0 2px 4px 0 rgba(46, 30, 20, 0.06)',
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(-10px) scaleX(1.15)', opacity: '0.4' },
          '100%': { transform: 'translateY(-20px) scaleX(0.9)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'steam': 'steam 3s ease-out infinite',
        'float': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
