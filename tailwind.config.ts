import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0b0f1a',
          900: '#101827',
          800: '#1b2537',
          700: '#273046'
        }
      }
    }
  },
  plugins: []
};

export default config;
