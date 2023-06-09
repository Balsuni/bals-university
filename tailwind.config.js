/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Ubuntu: ["Ubuntu"],
    },
    colors: {
      darkblue: {
        50: "#EDF2FF",
        100: "#B1B8C8",
        200: "#8B95AD",
        300: "#647191",
        400: "#3D4E76",
        500: "#162A5A",
        600: "#12234B",
        700: "#0F1C3C",
        800: "#0B152D",
        900: "#091124",
      },

      darkblue2: {
        50: "#CCD6E5",
        100: "#AABBD3",
        200: "#8099BE",
        300: "#5577A8",
        400: "#2B5592",
        500: "#00337C",
        600: "#002B67",
        700: "#002253",
        800: "#001A3E",
        900: "#01122B",
      },
      cyan1: {
        50: "#EEFFFF",
        100: "#ADDDDD",
        200: "#84CCCC",
        300: "#5ABABA",
        400: "#31A9A9",
        500: "#089898",
        600: "#077F7F",
        700: "#056565",
        800: "#044C4C",
        900: "#043737",
      },
      cyan2: {
        50: "#CCF7F1",
        100: "#AAF2E8",
        200: "#80ECDD",
        300: "#55E5D2",
        400: "#2BDFC6",
        500: "#00D8BB",
        600: "#00B49C",
        700: "#00907D",
        800: "#006C5E",
        900: "#00473E",
      },

      red: {
        50: "#FFEAED",
        100: "#FECACE",
        200: "#ED9594",
        300: "#E26C6A",
        400: "#EA4946",
        500: "#EE3629",
        600: "#DF2B29",
        700: "#CE1F23",
        800: "#C1161C",
        900: "#B2000F",
      },
      green: {
        50: "#E5F6E9",
        100: "#C1E7C8",
        200: "#98D8A5",
        300: "#6ACA81",
        400: "#44BE66",
        500: "#00B24A",
        600: "#00A341",
        700: "#009135",
        800: "#00802A",
        900: "#006114",
      },
      gray: {
        50: "#FBFBFB",
        100: "#F6F6F6",
        200: "#F1F1F1",
        300: "#E4E4E4",
        400: "#C2C2C2",
        500: "#A3A3A3",
        600: "#7A7A7A",
        700: "#666666",
        800: "#464646",
        900: "#252525",
      },
      black: "#000000",
      white: "#FFFFFF",
      blackText: "#252525",
      lineColor: "#ADADAD",
      imageColor: "#D9D9D9",
      bodyBackground: "#F9FAFC",
      inputBackground: "#F5F5F5",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // => @media (min-width: 1400px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
