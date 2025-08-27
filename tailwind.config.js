/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all source files
  ],
  darkMode: "class", // or 'media' if you want system-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Sky blue
        secondary: "#9333ea", // Purple
        accent: "#f59e0b", // Amber
        dark: "#0f172a", // Dark background
        light: "#f8fafc", // Light background
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.06)",
        card: "0 4px 14px rgba(0,0,0,0.1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        slideUp: "slideUp 0.8s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
