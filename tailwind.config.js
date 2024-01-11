/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'light-container': '#FFFFFF',
        'light-background': '#F5F7F8',
        'light-text': '#333333',
        'dark-container': '#282828',
        'dark-in-container': '#3f3f3f',
        'dark-background': '#121212',
        'dark-text': '#FFFFFF',
        primary: '#F4CE14',
      },
    },
  },
  plugins: [],
};
