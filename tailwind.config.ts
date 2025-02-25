import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInDown: "fadeInDown 0.5s ease-in-out",
      },
      colors: {
        primary: "var(--primary)",
        "primary-900": "var(--primary-900)",
        secondary: "var(--secondary)",
        "secondary-light": "var(--text-secondary)",
      },
      boxShadow: {
        baseShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        halfShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      },
    },
    keyframes: {
      fadeInDown: {
        "0%": { opacity: "0", transform: "translateY(-20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
  },
  plugins: [],
} satisfies Config;
