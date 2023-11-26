import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cssBlue: '#0000FF',
      },
      animation: {
        'up': 'up 3s linear'
      },
      keyframes: {
        up: {
          '0%': { opacity: '0', transform: 'translateY(100%)', color: 'red'},
          '100%': { opacity: '1', transform: 'translateY(0)', color: '#0000FF'}
        },
      },
    },
  },
  plugins: [],
}

export default config