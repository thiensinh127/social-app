import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
      },
      gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      },
      colors: {
        'text-primary-200': '#6c757d',
        'text-primary-500': '#000',
        'text-secondary-200': '#0b5ed7',
        'text-secondary-500': '##0d6efd',
      },

      backgroundColor: {
        'bg-primary-200': '#edf2f6',
        'bg-primary-500': '#ffffff',
        'bg-secondary': '#4d94e7'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
