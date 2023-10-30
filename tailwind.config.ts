import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        natural: {
          50: "#F3F4F6",
          100: "#EFEFEF",
          200: "#E5E4E4",
          300: "#CACACA",
          400: "#A8A8A8",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#262626",
        },
        purple: {
          50: "#F5F0FF",
          300: "#ECE2FF",
          500: "#D2BAFF",
          700: "#9E6CFF",
          900: "#6B3CC7",
        },
        success: {
          50: "#ECF6F3",
          300: "#9BE8D2",
          500: "#08BC7E",
          700: "#01764E",
          900: "#014832",
        },
        warning: {
          50: "#FFFBEB",
          300: "#FDE895",
          500: "#FCD34D",
          700: "#F59E0B",
          900: "#B97604",
        },
        error: {
          50: "#FEF1F1",
          300: "#FCBDBD",
          500: "#EF4444",
          700: "#B91C1C",
          900: "#7F1D1D",
        },
        shades: {
          0: "#FFFFFF",
          100: "#000000",
          yellow: "#FFCD2E",
          red: "#FF8389",
        },
      },
    },
  },
  plugins: [],
}
export default config
