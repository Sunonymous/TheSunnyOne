/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './resources/html/*.html', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      dropShadow: {
        'emWhite': [
           '-1px 1px 0.5px #FFF',
            '1px 1px 0.5px #FFF',
           '1px -1px 0.5px #FFF',
          '-1px -1px 0.5px #FFF',
        ],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '100% 100%',
            'background-position': 'right center'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 2.9s ease-out infinite',
      },
    },
  },
  plugins: [],
}
