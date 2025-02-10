import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      overflowWrap: {
        anywhere: 'anywhere',
      },
      screens: {
        '3xl': '1820px', 
        '4xl': '2560px', 
      },
    },
  },
  plugins: [],
};
export default config;
