/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsl(198, 62%, 26%)',
        'dark-moderate-cyan': 'hsl(167, 34%, 41%)',
        
        'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        'header-mobile': "url('../images/mobile/image-header.jpg')",
        'header-desktop': "url('../images/desktop/image-header.jpg')",
        'graphic-design-mobile': "url('../images/mobile/image-graphic-design.jpg')",
        'graphic-design-desktop': "url('../images/desktop/image-graphic-design.jpg')",
        'photography-mobile': "url('../images/mobile/image-photography.jpg')",
        'photography-desktop': "url('../images/desktop/image-photography.jpg')"
      }
    },
  },
  plugins: [],
}
