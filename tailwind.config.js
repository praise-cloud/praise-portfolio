/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            charcoal: "#1a1818",
            offwhite: "#ece7e1",
            coral: "#cf8479",
            blue: "#3e52ae",
            nude: "#f1d5bf",
            red: "#ff471a",
            pinkdust: "#c69e91",
            white: "#ffffff",
            black: "#000000",
            "new-red": "orangered",
            pink: "#f8c9e8",
            "new-pink": "#ff94c1",
          },
    },
  },
  plugins: [],
}
