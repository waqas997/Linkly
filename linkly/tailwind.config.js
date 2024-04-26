/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "1sm": "321px",
        sm: "640px",
        md: "767px",
        land: '950px',
        lg: "1025px",
        "lg-a": "1149px",
        xl: "1279px",
        "xl-a": "1460px",

        "2xl": "1900px",
        "3xl": "2300px",
        "4xl": "3000px",
        "5xl": "4200px",
        "6xl": "6000px"

      },
    },
  },
  plugins: [],
}

