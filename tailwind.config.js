/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors:{
        "main": "#365486",
        "background":"#DCF2F1",
        "shade":"#0F1035"
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

