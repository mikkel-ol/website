/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        racket: "url(/img/racket.webp), auto;",
        boxing: "url(/img/boxing.webp), auto;",
        formula1: "url(/img/formula1.webp), auto;",
      },
    },
  },
  plugins: [],
};
