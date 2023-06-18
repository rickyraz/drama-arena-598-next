// import type { Config } from "tailwindcss";
import { shadcnPlugin } from "./shadcn-plugin";
import animate from "tailwindcss-animate";

export const shadcnPreset = {
  content: [],
  plugins: [shadcnPlugin, animate],
};

// satisfies Config
