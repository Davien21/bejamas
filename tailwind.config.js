module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1.20rem",
        sm: "1.20rem",
        lg: "4.5rem",
        // xl: "5rem",
        "2xl": "6rem",
      },
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        inherit: "inherit",
        none: "none",
        2: "2 2 0%",
        3: "3 3 0%",
        3: "12 12 0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "768px",
          },
          "@screen md": {
            maxWidth: "992px",
          },
          "@screen lg": {
            maxWidth: "1536px",
          },
          "@screen xl": {
            maxWidth: "1800px",
          },
        },
      });
    },
  ],
};
