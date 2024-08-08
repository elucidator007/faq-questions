/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange1: '#FDEEDC',
        orange2: '#FFD8A9',
        orange3: '#F1A661',
        orange4: '#E38B29',
      },
    },
  },
  plugins: [],
};
