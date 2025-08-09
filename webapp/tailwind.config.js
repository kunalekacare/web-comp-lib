/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../design-system/src/**/*.{js,ts,jsx,tsx}",
    "../design-system/dist/**/*.{js,mjs,ts,tsx,jsx,css}",
    "./node_modules/@design-system/ui/dist/**/*.{js,mjs}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--border-radius-l)',
        md: 'var(--border-radius-m)',
        sm: 'var(--border-radius-s)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
