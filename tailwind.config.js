/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['Nanum Pen Script', 'cursive'],
      },
      colors: {
        primary: '#6366f1',
      },
    },
  },
  plugins: [],
};
