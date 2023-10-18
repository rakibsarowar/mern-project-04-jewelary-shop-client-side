/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {

        mytheme: {

          "primary": "#e51b76",

          "secondary": "#9136f9",

          "accent": "#ea96b9",

          "neutral": "#2E3038",

          "base-100": "#F9F9FB",

          "info": "#98C2F6",

          "success": "#56E6C2",

          "warning": "#F6CE55",

          "error": "#EB462D",
        },
        
      },
    ],
  },

  plugins: [require("daisyui")],
}

