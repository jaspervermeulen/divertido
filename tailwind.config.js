module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fries: ['Fries', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: '#539AD1',
        orange: '#EF965A',
        red: '#EF5A5A',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};
