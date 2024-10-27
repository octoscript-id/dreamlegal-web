import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          950: '#04284E',
          900: '#0B3766',
          800: '#134E86',
          700: '#1369AE',
          600: '#0E77CD',
          500: '#3D9DEB',
          400: '#7BBEF4',
          300: '#A3D0F5',
          200: '#C5E3FC',
          100: '#E2F1FD',
          50: '#ECF6FE',
          25: '#FAFDFF',
        },
        gray: {
          950: '#0C111D',
          900: '#101828',
          800: '#1D2939',
          700: '#344054',
          600: '#475467',
          500: '#667085',
          400: '#98A2B3',
          300: '#D0D5DD',
          200: '#E4E7EC',
          100: '#F2F4F7',
          50: '#F9FAFB',
          25: '#FCFCFD',
        }
      },
      fontSize: {
        'display-lg': ['64px', '80px'],
        'display-md': ['40px', '52px'],
        'display-sm': ['40px', '52px'],
        'display-xs': ['32px', '40px'],
        'heading-lg': ['22px', '30px'],
        'heading-md': ['18px', '26px'],
        'heading-sm': ['14px', '20px'],
        'body-xl': ['17px', '24px'],
        'body-lg': ['16px', '24px'],
        'body-md': ['14px', '20px'],
        'body-sm': ['12px', '16px'],
        'label-lg': ['16px', '24px'],
        'label-md': ['14px', '20px'],
        'label-sm': ['12px', '16px']
      }
    },
  },
  plugins: [],
};
export default config;
