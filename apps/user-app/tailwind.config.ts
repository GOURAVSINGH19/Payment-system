import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(avatar|button|card|divider|dropdown|input|modal|table|tabs|toast|popover|user|ripple|spinner|menu|form|checkbox|spacer).js"
  ],
  prefix: "",
  theme: {
    extend: {},
  },
};

export default config;