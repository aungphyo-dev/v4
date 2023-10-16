
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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

