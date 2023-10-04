/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '6rem',
      },
    },
    extend: {
      animation:{
        'spin-slow': 'spin 4s linear infinite',
        "bounce-one" : "bounce 1s linear"
      },
      fontFamily:{
        "akaya" :"Akaya",
        "aceme" : "Acme"
      },
    },
  },
  plugins: [],
}
