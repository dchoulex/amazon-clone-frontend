/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: "#__next",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          dark: "var(--amazon-blue)",
          light: "var(--amazon-lighter-blue)",
          DEFAULT: "var(--amazon-blue)"
        }
      },
      width: {
        "250": "250px",
      },
      minWidth: {
        "400": "400px"
      },
      margin: {
        "4px": "4px",
        "16px": "16px"
      },
      height: {
        "56px": "56px",
        "39px": "39px"
      },
      padding: {
        "8px": "8px"
      },
      screens: {
        "lg": "1170px",
        "tablet": "640px",
        "laptop": "1024px",
        "desktop": "1280px",
      }
    },
  },
  plugins: [],
}
