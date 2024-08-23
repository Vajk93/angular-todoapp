/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'my-black-text': '#292929',
        'my-bright-blue': 'hsl(220, 98%, 61%)',
        'my-very-light-gray': 'hsl(0, 0%, 98%)',
        'my-very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'my-light-grayish-blue': 'hsl(233, 11%, 84%)',
        'my-dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'my-very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        'my-dark-very-dark-blue': 'hsl(235, 21%, 11%)',
        'my-dark-very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'my-dark-light-grayish-blue': 'hsl(234, 39%, 85%)',
        'my-dark-light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'my-dark-dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'my-dark-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
        'my-dark-very-dark-grayish-blue-2': 'hsl(237, 14%, 26%)',
      },
      // for linear, gradientColorStops, we need backgroundImage:
      backgroundImage: {
        'my-linear-bg': 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      },
    },
  },
  plugins: [],
}
