/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-background": "url('@/assets/images/hero_background.svg')",
      },
      fontFamily: {
        mainFont: "Suisse BP Int'l",
      },
      backgroundColor: {
        mainColor: "#141414",
      },
      color: {
        mainColor: "#141414",
      },
    },
    screens: {
      phone: "531px",
      table: "856px",
      display: "1241px",
    },
  },
  plugins: [],
};
