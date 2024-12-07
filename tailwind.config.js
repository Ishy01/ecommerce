/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
<<<<<<< HEAD
  theme: {
    extend: {},
=======
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        }
      }
    },
>>>>>>> 70db6f06a0d562840d28de11a17079978ec8d144
  },
  plugins: [],
}

