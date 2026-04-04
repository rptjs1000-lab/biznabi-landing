import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2545',
          900: '#091D38',
          800: '#0B2545',
          700: '#0E3260',
        },
        blue: {
          DEFAULT: '#1B6AAA',
          500: '#1B6AAA',
          400: '#2A7FBF',
        },
        skyblue: {
          DEFAULT: '#4AADCF',
          400: '#5DBDD9',
          300: '#7DD3E8',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          500: '#64748B',
          600: '#475569',
        },
      },
      fontFamily: {
        pretendard: ['Pretendard Variable', 'Pretendard', 'system-ui', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
