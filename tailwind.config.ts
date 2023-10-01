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
        'primary-100': '#deefe6',
        'primary-200': '#6c757d',
        'primary-500': '#000',
        'secondary-200': '#0b5ed7',
        'secondary-500': '#0d6efd',
      },

      backgroundColor: {
        'white-200': '#edf2f6',
        'white-500': '#ffffff',
        'primary-500': '#0d6efd'
      },
      borderRadius: {
        'border-base': '15px'
      },
      borderColor: {
        'base': '#0d6efd',
        'gray': '#dee2e6'
      },
      boxShadow: {
        'shadow-base': '0px 8px 15px rgba(0, 0, 0, 0.1)',
        'shadow-sm': '0 .125rem .25rem rgba(0, 0, 0, .075)'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
