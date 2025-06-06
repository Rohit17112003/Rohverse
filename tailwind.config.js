/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#C778DD",
      gray: "#ABB2BF",
      white: "#fff",
    },
    backgroundColor: {
      dark: "#282C33",
      light_primary: "rgba(199, 120, 221, 0.20)",
      primary: "#C778DD",
      gray: "#ABB2BF",
    },
    borderColor: {
      primary: "#C778DD",
      gray: "#ABB2BF",
    },
    extend: {},
  },
  plugins: [],
};
