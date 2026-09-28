import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Specify the paths to all of your template files where you will use Tailwind classes
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // 2. Enable dark mode switching via a class on the <html> or <body> tag
  darkMode: "class",

  // 3. Customize your theme layout, colors, and fonts here
  theme: {
    extend: {
      colors: {
        primary: "#1557ff",
        primaryDark: "#0d37b8",
        secondary: "#7c3aed",
        accent: "#ff8a00",
        ink: "#10162f",
        muted: "#65708a",
        soft: "#f4f7ff",
        card: "#ffffff",
        border: "rgba(21, 87, 255, 0.12)",
        shadow: "rgba(21, 38, 85, 0.12)",
        shadowsm: "rgba(21, 38, 85, 0.08)",
      },
      fontFamily: {
        // Example custom fonts: sans: ['Inter', 'sans-serif']
        heading: ["Raleway", "sans-serif"],
        // body: ["Nunito", "sans-serif"],
        body: "'Cairo', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      },
    },
  },

  // 4. Add official or third-party Tailwind plugins here
  plugins: [],
};

export default config;
