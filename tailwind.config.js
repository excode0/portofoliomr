/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        background: "var(--background-color)",
        backgroundSecondary: "var(--backgroundsecondary-color)",
        text: "var(--text-color)",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['Source Code Pro', 'monospace'],
      },

      keyframes: {
        dash: {
          '0%': { strokeDasharray: '0, 1000' },
          '100%': { strokeDasharray: '1000, 0' },
        },
        fill: {
          '0%': { fill: 'transparent' },
          '100%': { fill: 'currentColor' },
        },
      },
      animation: {
        dash: 'dash 2s linear infinite',
        fill: 'fill 2s linear infinite',
      },

    },
  },
  plugins: [],
}

