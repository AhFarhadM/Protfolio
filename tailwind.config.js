/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid

        "custom-about": "1.2fr 1fr ",
      },
    },
  },
  plugins: [],
};
