/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(75, 94%, 57%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          grey: 'hsl(0, 0%, 20%)',
          'dark-grey': 'hsl(0, 0%, 12%)',
          'off-black': 'hsl(0, 0%, 8%)',
        },
      },
      fontSize: {
        'sm': '14px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        '400': 400,
        '600': 600,
        '700': 700,
      },
    },
  },
  plugins: [
  ],

}

