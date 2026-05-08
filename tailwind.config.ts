import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "ui-sans-serif",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
      },
    },
  },
};

export default config;