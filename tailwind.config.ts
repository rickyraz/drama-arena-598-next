import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';
import { shadcnPreset } from './lib/shadcn-preset'
import postcss from "postcss"

const config = {
  presets: [shadcnPreset],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}',],
} satisfies Config

export default config 