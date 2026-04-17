import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFD700", // Gold
          light: "#FFE44D",
          dark: "#B39700",
        },
        black: "#000000",
        gray: {
          900: "#1A1A1A",
          800: "#333333",
          700: "#444444",
          600: "#555555",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(255, 215, 0, 0.3)',
        'gold-glow-hover': '0 0 25px rgba(255, 215, 0, 0.5)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
