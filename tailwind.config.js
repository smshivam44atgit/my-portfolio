/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#f8fafc',

        primary: '#0f172a',
        secondary: '#64748b',

        accent: '#2563eb',
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '0.3em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}