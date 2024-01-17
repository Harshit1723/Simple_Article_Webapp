/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens:{
        's':'412px',
        'ss':'320px',
  
      },
      fontSize:{
        
        's':'1rem',
        'ss':'0.5rem'
      }
    },
  },
  plugins: [],
}

