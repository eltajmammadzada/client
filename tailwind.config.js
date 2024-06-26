/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Primary": "#d2ef9a",
        "On-Surface": "#1f1f1f",
        "Secondary": "#696c70",
        "Secondary2": "#a0a0a0",
        "White": "#ffffff",
        "Surface": "#f7f7f7",
        "Critical": "#db4444",
        "Warning": "#8684d4",
        "Success": "#3dab25",
        "Yellow": "#ecb018",
        "line": "#e9e9e9",
        "pink": "#f4407d"
       },
       container:{
        center:true
       },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // antd confilit
  },
}