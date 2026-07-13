/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crust: "#FFF8ED",
        beige: "#F3E1C4",
        tomato: "#E63946",
        marinara: "#A61E22",
        cheese: "#F5A623",
        basil: "#588157",
        charcoal: "#2B2118",
      },
      fontFamily: {
        heading: ['"Baloo 2"', "cursive"],
        body: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        warm: "0 10px 30px -10px rgba(166, 30, 34, 0.35)",
        soft: "0 4px 20px -4px rgba(43, 33, 24, 0.12)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
