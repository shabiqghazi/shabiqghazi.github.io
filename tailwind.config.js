/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './js/*.js', 'index.html'],
  theme: {
    extend: {
      colors: {
        "light": "#eee",
        "accent": "#24DEE9",
        "dark": "#222831",
        "seccondary": "#31363F"
      },
      fontSize:{
        "s-tiny": "8px",
        "s-xsmall": "12px",
        "s-small": "16px",
        "s-normal": "20px",
        "s-large": "28px",
        "s-xlarge": "32px",
        "s-huge": "48px",
        "s-xhuge": "64px"
      }
    },
  },
  plugins: [],
}