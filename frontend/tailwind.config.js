/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        cols: "0 0 auto",
      },
      width: {
        thirty: "30%",
      },
    },
  },
  plugins: [],
};
