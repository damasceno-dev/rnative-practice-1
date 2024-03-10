/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
          regular: "Poppins_400Regular",
          medium: "Poppins_500Medium",
          bold: "Poppins_700Bold",
      }
    },
  },
  plugins: [],
}

