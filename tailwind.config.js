// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // heroImage: "url('image53.png')",
        heroImage: "url('camping.jpg')",
        // aboutImage: "url('image54.png')",
        aboutImage: "url('campe2.jpg')",
      },
      height: {
        halfScreen: "82vh",
        "footer-texture": "url('/img/footer-texture.png')",
        buttonHeight: "50px",
      },
      fontFamily: {
        interFamily: ["Inter", "sans-serif"],
      },
      colors: {
        orangePrimary: "#FF8C38",
        blackSecondary: "#252525",
        yellowTertiary: "#FFCC8D",
      },
      minHeight: {
        hMin: "82vh",
        aMin: "60vh",
      },
      width: {
        buttonWidth: "180px",
      },
    },
  },
  plugins: [],
};
