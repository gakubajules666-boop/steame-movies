/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/store/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#e50914",
          foreground: "#ffffff"
        },
        muted: {
          DEFAULT: "#181818",
          foreground: "#a1a1aa"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(229, 9, 20, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
