/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ألوان مخصصة للمشروع
        primary: '#3b82f6',
        'dark-bg': '#0f172a',
        'card-bg': '#1e293b',
      },
    },
  },
  plugins: [],
}