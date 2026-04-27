import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101214",
        graphite: "#171A1F",
        cloud: "#F5F7FA",
        muted: "#A7B0C0",
        electric: "#3B82F6",
        mint: "#34D399",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(59, 130, 246, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
