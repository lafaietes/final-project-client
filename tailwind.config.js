module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/background.png')",
      },
      keyframes: {
        crossfadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        crossfadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        crossfadeIn: "crossfadeIn 1s ease-in-out",
        crossfadeOut: "crossfadeOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};