/** @type {import('tilwindcss).Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      fairplay: ["Playfair Display", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#233831",
        secondary: "#f8f8f8",
        greenl: "#8EDBC1",
        greenls: "#d2fff07c",
        quaternary: "#f8f8f8",
        quinary: "#f8f8f8",
        senary: "#f8f8f8",
        septenary: "#f8f8f8",
    },
  },
},
  plugins: [],
};
