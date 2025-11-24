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
      colors: {
        "courtier-off-black": "var(--courtier-off-black)",
        "courtier-anthracite": "var(--courtier-anthracite)",
        "courtier-ash": "var(--courtier-ash)",
        "courtier-silver": "var(--courtier-silver)",
        "courtier-white": "var(--courtier-white)",
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
