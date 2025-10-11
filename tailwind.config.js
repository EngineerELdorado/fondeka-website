/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        fondeka: { green:"#4F805C", mint:"#85A38D", dark:"#0D1F14", light:"#F2F7F4", accent:"#1FAD66" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" }
    }
  },
  plugins: []
};
