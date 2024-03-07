/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";



export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      boxShadow: {
        shadow: "3px 5px 60px -10px rgba(14, 165, 233, 0.3)",
      },
      backgroundImage: {
        "page-pattern": "url('https://files.waanverse.com/images/gradbg.svg')",
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        gray: {
          50: "##fafafa",
          100: "#f5f5f5 ",
          200: "#e5e5e5",
          300: "#d4d4d4 ",
          400: "#a3a3a3 ",
          500: "#737373 ",
          600: "#525252 ",
          700: "#404040 ",
          800: "#262626 ",
          900: "#171717 ",
          950: "#121212",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
