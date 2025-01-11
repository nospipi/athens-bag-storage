import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        "custom-700": "700px",
        "h-sm": { raw: "(max-height: 700px)" },
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow
        md: "4px 4px 6px rgba(0, 0, 0, 0.2)", // Medium shadow
        lg: "6px 6px 8px rgba(0, 0, 0, 0.3)", // Large shadow
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
