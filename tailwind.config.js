/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.css",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-aktiv-regular)", "sans-serif"],
        extended: ["var(--font-aktiv-extended)", "sans-serif"],
      },
      colors: {
        courtier: {
          off: "#0E0E0E",
          anthracite: "#222222",
          ash: "#A0A0A0",
          silver: "#C4C4C4",
          white: "#FFFFFF",
        },
      },
      backgroundColor: {
        courtier: "#0E0E0E",
        "courtier-panel": "#222222",
      },
      textColor: {
        muted: "#A0A0A0",
      },
      borderColor: {
        soft: "rgba(196,196,196,0.24)",
      },
      keyframes: {
        "courtier-fade-in": {
          from: { opacity: 0.8, transform: "translateY(6px) scale(0.995)" },
          to: { opacity: 1, transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "courtier-fade-in": "courtier-fade-in 700ms ease-out forwards",
      },
      borderRadius: {
        courtier: "8px",
      },
      padding: {
        courtier: "24px",
      },
    },
  },
  plugins: [],
};
