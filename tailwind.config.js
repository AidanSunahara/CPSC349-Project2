/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.hbs"],
  theme: {
    colors: {
    
    'white': '#f8fafc',
    'sky': '#7dd3fc',
    'blue': '#A4CAFE',
    'gray': '#E5E7EB', 
    
    },
  screens: {
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1440px'
  },
    extend: {
  },
  },
  plugins: [],
}
