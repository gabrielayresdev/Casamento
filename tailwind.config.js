/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        containerDesktop: "10%",
      },
      fontSize: {
        1.5: "1.5rem",
      },
      colors: {
        c1: "#0D0D0D",
        c2: "#EFEFEF",
        c3: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
