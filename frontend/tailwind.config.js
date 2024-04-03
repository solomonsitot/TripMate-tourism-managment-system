/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        per70: "70%",
        per90: "90%",
      },
      height: {
        100: "400px",
      },
      margin: {
        per5: "5%",
      },
    },
  },
  plugins: [],
};
