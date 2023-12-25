import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        50: "#F2F9FF",
        100: "#E5F4FF",
        200: "#CCE9FF",
        300: "#B2DEFF",
        400: "#80C8FF",
        500: "#4DB2FF",
        600: "#0091FF",
        700: "#007DEB",
        800: "#0069D7",
        900: "#0055C3",
      },
      red: {
        DEFAULT: "#FF533C",
        light: "#FFF6F5",
        dark: "#CC4230",
      },
      yellow: {
        DEFAULT: "#FFD600",
        light: "#FFFBE5",
        dark: "#CCAB00",
      },
      orange: {
        DEFAULT: "#FFF5E5",
        light: "#FF9900",
        dark: "#cc7d07",
      },
      green: {
        light: "#EEFBE5",
        DEFAULT: "#50D300",
        dark: "#40A900",
      },
      blue: {
        light: "#F2FCFF",
        DEFAULT: "#00B5EE",
        dark: "#0090BE",
      },
      black: {
        DEFAULT: "#131415",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      gray: {
        DEFAULT: "#B3BBC4",
        dark: "#6D757E",
        extraDark: "#363A3F",
        light: "#EDEEF0",
        extraLight: "#F5F6F8",
      },
      disabled: {
        red: "#DC262633",
        primary: "#0091FF33",
        black: "#13141533",
      },
    },
    fontFamily: {
      "noto-sans-cjk-jp": "Noto Sans CJK JP",
    },
    extend: {
      fontSize: {
        "2xl": "32px",
        xl: "24px",
        lg: "20px",
        base: "16px",
        s: "14px",
        xs: "12px",
        xxs: "10px",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
      lineHeight: {
        normal: "160%",
        tight: "120%",
        none: "100%",
      },
      boxShadow: {
        "01": "0px 0.5px 2px 0px rgba(0, 85, 195, 0.10), 0px 0px 2px 0px rgba(0, 85, 195, 0.10);",
        "02": "0px 2px 4px 0px rgba(0, 85, 195, 0.10), 0px 0px 2px 0px rgba(0, 85, 195, 0.10);",
        "03": "0px 4px 8px 0px rgba(0, 85, 195, 0.10), 0px 0px 2px 0px rgba(0, 85, 195, 0.10);",
        "04": "0px 8px 16px 0px rgba(0, 85, 195, 0.10), 0px 0px 2px 0px rgba(0, 85, 195, 0.10);",
        "05": "0px 16px 24px 0px rgba(0, 85, 195, 0.10), 0px 0px 2px 0px rgba(0, 85, 195, 0.10);",
        "06": "0px 40px 40px 0px rgba(0, 85, 195, 0.10), 0px 0px 2px 0px rgba(0, 85, 195, 0.10);",
      },
      dropShadow: {
        md: ["0 8px 8px rgba(0, 85, 195, 0.10)", "0 0 1px rgba(0, 85, 195, 0.10)"],
      },
    },
  },
  plugins: [
    ({ addUtilities }) =>
      addUtilities({
        ".underline-primary-600": { textDecorationColor: "#0091FF" },
        ".underline-primary-900": { textDecorationColor: "#0055C3" },
      }),
  ],
} satisfies Config;
