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
        "page-pattern": "url('https://files.waanverse.com/images/bg.jpg')",
      },
      colors: {
        primary: {
          // Assuming "LightBlue" is a good name for your primary color
          50: "#f0f9ff",
          100: "#E1F5FE",
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
          // Keeping "gray" as the name
          50: "#FAFAFA",
          100: "#F5F5F5 ",
          200: "#EEEEEE",
          300: "#E0E0E0 ",
          400: "#BDBDBD ",
          500: "#9E9E9E ",
          600: "#757575 ",
          700: "#616161 ",
          800: "#424242 ",
          900: "#212121 ",
          950: "#121212",
        },
        google: {
          "text-gray": "#3c4043",
          "button-blue": "#1a73e8",
          "button-blue-hover": "#5195ee",
          "button-dark": "#202124",
          "button-dark-hover": "#555658",
          "button-border-light": "#dadce0",
          "logo-blue": "#4285f4",
          "logo-green": "#34a853",
          "logo-yellow": "#fbbc05",
          "logo-red": "#ea4335",
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
