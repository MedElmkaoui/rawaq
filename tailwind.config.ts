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
        "orange": "#EF633E",
        "blue": "#5DC4B8",
        "gray": "#333333",
        "naturel": "#F3F3F3",
      },
      backgroundImage: theme => ({
        'gradient-light': 'linear-gradient(to right, #ECF8F8, #FCEEE9)',
        'gradient-light-orange': 'linear-gradient(to right, #FFDDD4, #FFF0EC)',
        'gradient-light-blue': 'linear-gradient(to right, #C5FFF8, #E4FFFC)',
        'gradient-light-yellow': 'linear-gradient(to right, #FFEFD4, #FFF8EC)',
        'gradient-orange': 'linear-gradient(to top, #EF633E, #F89C72)',
        'gradient-blue': 'linear-gradient(to top, #5DC4B8, #96E4DD)',
        'gradient-tertiary': 'linear-gradient(to right, #F59E0B, #EF4444)',
      }),
    },
  },
  plugins: [],
};
export default config;
