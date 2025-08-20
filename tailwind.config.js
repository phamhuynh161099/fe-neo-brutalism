/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        // Bạn có thể thêm các animation khác ở đây
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        meteor: {
          "0%": { 
            transform: "rotate(215deg) translateX(0)", 
            opacity: "1" 
          },
          "70%": { 
            opacity: "1" 
          },
          "100%": { 
            transform: "rotate(215deg) translateX(-500px)", 
            opacity: "0" 
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { 
            transform: "translateY(20px)", 
            opacity: "0" 
          },
          "100%": { 
            transform: "translateY(0)", 
            opacity: "1" 
          },
        },
      },
    },
  },
  plugins: [],
};