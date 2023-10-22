/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-color": "#003366",
        "base-color": "#FFF9EC",
        "accent-color": "#FFA500",
        "light-color": "#DFE8F1",
        "app-gray": "#D9D9D9",
      },
      boxShadow: {
        top: "0 0 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
