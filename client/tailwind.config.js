import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /* container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    }, */
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      backgroundColor: {
        default: "var(--color-bg-default)",
      },
      textColor: {
        default: "var(--color-text-default)",
        secondary: "var(--color-text-secondary)",
      },
      backgroundImage: {
        "primary-gradient": "var(--color-primary-gradient)",
      },
      boxShadow: {
        default: "var(--shadow-default)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
