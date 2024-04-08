/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#21a264",
      paleGreen: '#dee2d0',
      olive: '#8da674',
      skyBlue: '#d0e4ff',
      peach: '#fedbb3',
      paleYellow: '#fff3b5',
      footer: "#8FA6CB",
      neutral: "#f0f0f0",
      black: "#000000",
      accent: "#224631",
    }),
    textColor: {
      primary: "#21a264",
      accent: "#224631",
      olive: '#8da674',
      neutral: "#f0f0f0",
      black: "#000000",
      skyBlue: '#d0e4ff',
      peach: '#fedbb3',
      paleYellow: '#fff3b5',
      lilac: '#cdc1ff',
    },
    borderColor: {
      primary: "#21a264",
      accent: "#224631",
      olive: '#8da674',
    },
    boxShadowColor: {
      paleGreen: '#dee2d0',
      neutral: "#f0f0f0",
    },
    ringColor: {
      accent: "#224631",
    },
    backgroundImage: {
      'hero-service01': "url('/public/assets/consulting.jpg')"
    },
    minHeight: {
      0: "0",
      1: "25vh",
      2: "50vh",
      3: "75vh",
      screen: "100vh",
    },
    extend: {},
  },
  plugins: [],
};
