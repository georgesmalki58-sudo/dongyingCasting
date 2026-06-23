import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f5f7fa', 100: '#e8edf3', 200: '#cdd8e4', 300: '#a3b6cb',
          400: '#728eac', 500: '#516f91', 600: '#3f5777', 700: '#354761',
          800: '#2f3d52', 900: '#1b2433', 950: '#0f1620'
        },
        brand: {
          DEFAULT: '#0b3d91', // dark industrial blue
          dark: '#072a66',
          light: '#1d5fd1',
          accent: '#f59e0b' // amber CTA accent
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'ui-monospace', 'monospace']
      },
      container: { center: true, padding: '1.25rem', screens: { '2xl': '1280px' } }
    }
  },
  plugins: []
};
export default config;
