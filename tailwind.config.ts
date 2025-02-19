import type { Config } from "tailwindcss";

export default {
  content: ["./ui/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000000",
        inverted: "#ffffff",
        secondary: "#a0a0a0",
      },
      height: {
        button: "40px",
      },
      borderRadius: {
        button: "15px",
      },
      padding: {
        button: "15px 20px",
        safe: "30px",
        "extra-safe": "80px",
      },
      fontWeight: {
        heading: "600",
      },
      fontSize: {
        heading: "30px",
      },
      lineHeight: {
        heading: "35px",
      },
    },
  },
  plugins: [],
} satisfies Config;
