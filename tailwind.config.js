/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: { reveal: "reveal .3s forwards" },
    keyframes: {
      reveal: {
        "0%": {
          opacity: 0,
          transform: "translateY(1rem)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
    },
  },
  plugins: [],
};
