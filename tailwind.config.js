/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure Tailwind to scan all your HTML files for classes
  content: [
    "./*.html",
    "./js/*.js", 
  ],
  theme: {
    extend: {
      fontFamily: {
        // Keeps the Poppins font for headings
        'poppins': ['Poppins', 'sans-serif'],
      },
      // Custom animation for project filtering
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
}