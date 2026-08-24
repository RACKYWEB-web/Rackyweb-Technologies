/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05070F',
          900: '#090D1A',
          800: '#0D1326',
          700: '#131B36',
          600: '#1B2648',
        },
        electric: {
          400: '#6FA3FF',
          500: '#4C8DFF',
          600: '#3A6FE0',
        },
        violet: {
          400: '#9B85FF',
          500: '#7C5CFF',
          600: '#6544E0',
        },
        cyan: {
          400: '#5FF0DC',
          500: '#34E5D0',
          600: '#22C4B1',
        },
        ink: {
          50: '#F4F6FC',
          200: '#E7ECFA',
          400: '#B3BBD6',
          500: '#8B93B0',
          700: '#5A6182',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(76,141,255,0.35)',
        glowViolet: '0 0 60px -12px rgba(124,92,255,0.35)',
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 50px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(16px,-14px,0)' },
        },
        pulseLine: {
          '0%': { strokeDashoffset: 240 },
          '100%': { strokeDashoffset: 0 },
        },
        nodeGlow: {
          '0%,100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        rise: 'rise 0.8s cubic-bezier(0.16,1,0.3,1) both',
        drift: 'drift 10s ease-in-out infinite',
        pulseLine: 'pulseLine 2.4s linear infinite',
        nodeGlow: 'nodeGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
