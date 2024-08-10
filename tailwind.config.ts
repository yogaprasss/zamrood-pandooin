import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        white: '#faf9f5',
        gold: '#D6B66B',
        green: '#0b7373',
        'dark-green': '#004040'
      },
      borderColor: {
        white: '#faf9f5',
        gold: '#D6B66B',
        green: '#0b7373',
        'dark-green': '#004040'
      },
      backgroundColor: {
        white: '#faf9f5',
        gold: '#D6B66B',
        green: '#0b7373',
        'dark-green': '#004040'
      },
      stroke: {
        white: '#faf9f5',
        gold: '#D6B66B',
        green: '#0b7373',
        'dark-green': '#004040'
      }
    },
  },
  plugins: [],
};
export default config;
