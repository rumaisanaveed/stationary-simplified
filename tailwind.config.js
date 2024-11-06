/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray-50": "#4F4F4F",
        "custom-blue-50" : "#55A4FF"
      },
    },
  },
  plugins: [],
};
