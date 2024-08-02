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
        "dark-blue": "#0E1E32",
        gray: "#2A2A2A",
        "light-red": "#F6DDDC",
        red: "#C31815",
        page: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
export default config;
