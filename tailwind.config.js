/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'sm': {'max': '450px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        'custom': '0px 42.9px 93.37px -12.62px rgba(99, 155, 166, 0.73)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 40.87%, #FFF 100%)',
      },
      fontFamily: {
        heading: ['"ITC Cheltenham Std"', 'serif'],
        body: ['"Roboto Condensed"', 'sans-serif'],
      },
      container: {
        center: true,
        // padding: '1rem',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '100%',
          // padding: '1rem',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '100%',
          },
          '@screen 2xl': {
            maxWidth: '100%',
          },
        },
      })
    }
  ],
}

