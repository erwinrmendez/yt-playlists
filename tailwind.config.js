module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        light: "#BB86FC",
        DEFAULT: "#8961BB",
      },
      gray: {
        base: "#FAFAFA",
        light: "#C8C8C8",
        dark: "#A1A1A1",
        darker: "#404040",
      },
      error: "#EF4444",
    },
    extend: {
      screens: {
        xs: "420px",
      },
    },
  },
};
