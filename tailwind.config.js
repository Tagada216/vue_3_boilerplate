/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalSans: ["GeneralSans-Medium", "sans-serif"],
        generalSansSemibold: ["GeneralSans-Semibold", "sans-serif"],
        thunderBold: ["Thunder-BoldLC", "sans-serif"],
        thunderMedium: ["Thunder-MediumLC", "sans-serif"],
        playwrite: ["Playwrite", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#384CFF",
          DEFAULT: "#384CFF",
          dark: "#2D3DCC",
        },
        secondary: {
          light: "#F79824",
          DEFAULT: "#F79824",
          dark: "#C67A1D",
        },
        tertiary: {
          light: "#FF5964",
          DEFAULT: "#FF5964",
          dark: "#CC4750",
        },
        customWhite: {
          light: "#F3F3F3",
          DEFAULT: "#F3F3F3",
        },
        customBlack: {
          DEFAULT: "#2E2E2E",
          dark: "#2E2E2E",
        },
      },
    },
  },
  plugins: [],
};
