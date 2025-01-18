import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
		"./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css", // Ensure this line is present
  ],
   theme: {
    extend: {},
  },
  plugins: [],
};