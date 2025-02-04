/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#101828",
        primary: "#e80e0f",
        muted: {
          100: "#888888",
          200: "#71717a",
        },
        lightGreen: "#f1ffff",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", ...fontFamily.sans],
        plusJakartaSans: ["var(--font-plusJakartaSans)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      fontSize: {
        titleLG: "36px",
        titleSM: "20px",
        textLG: "18px",
        textSM: "15px",
      },
      padding: {
        xPadLG: "100px",
        xPadSM: "25px",
        yPadLG: "7rem",
        yPadSM: "3rem",
      },
    },
  },
  plugins: [],
};
