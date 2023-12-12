/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fontDark: "#212121",
        fontWhite: "#FAFAFA",
        fontError: "#D86161",
        fontPlaceholder: "#7A7A7A",
        fontSub: "#212427",
        primary: "#1597E4",
        cardWhite: "#FFFFFF",
        cardGray: "#E6E6E6",
      },
      spacing: {
        0.5: "4px",
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        inputHeightCustom: "36px",
      },
      gap: {
        0.5: "4px",
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
      },
    },
  },
  plugins: [],
};
