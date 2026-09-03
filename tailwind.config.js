/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFBF7',
          100: '#FDF8F3',
          200: '#F8EFE6',
          300: '#F0E2D5',
          400: '#E5D0BD',
        },
        blush: {
          50: '#FDF5F6',
          100: '#FAE8EB',
          200: '#F2D0D6',
          300: '#E8B4BC',
          400: '#D88E9A',
          500: '#C5727F',
          600: '#A85563',
        },
        cocoa: {
          50: '#F7F2EE',
          100: '#E8DDD3',
          200: '#C9B5A6',
          300: '#9A7B68',
          400: '#6B4A37',
          500: '#4A2C1E',
          600: '#3D2817',
          700: '#2E1D10',
          800: '#1F130A',
          900: '#14090A',
        },
        gold: {
          300: '#E0C896',
          400: '#D4AF37',
          500: '#C9A961',
          600: '#B8954A',
          700: '#A07F3A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
