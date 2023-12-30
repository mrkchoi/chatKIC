/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#f4fbf7',
        btnActive: 'rgba(0, 0, 0, 0.05);',
        btnHover: 'rgba(0, 0, 0, 0.05)',
        btnResumeHover: 'rgb(245, 245, 245)',
      },
    },
  },
  plugins: [],
};
