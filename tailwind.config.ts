import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/popover.js"
  ],
  theme: {
    screens: {
      mobile: "360px",
      tablet: "800px",
      tablet_lg: "1024px",
      desktop: "1280px",
      desktop_lg: "1536px",
    },
    extend: {
      fontFamily: {
        sans:['var(--font-neue-montreal)'],
        serif:['var(--font-baskerville)'],
        display: ['var(--font-krona)'],
      },
      colors: {
        black: {
          DEFAULT: '#131313',
          100: '#2C2C2C'
        },
        white: {
          DEFAULT: '#F1E8DF',
          100: '#F2EFEB',
          200: 'E4D9CF'
        }
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@designbycode/tailwindcss-text-stroke"),
    nextui({
      themes: {
        light: {
          colors: {
            foreground: "#2C2C2C",
            background: "#F1E8DF",
          },

          
        },
        dark: {

          colors: {
            foreground: "#F1E8DF",
            background: "#131313",
          },
        },
        // ... custom themes
      },
    }),
  ],
};



