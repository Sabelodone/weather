/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'weather-primary': '#4a90e2',
        'weather-secondary': '#7e57c2',
        'weather-text': '#ffffff',
        'weather-bg': 'rgba(255, 255, 255, 0.1)',
        'weather-border': 'rgba(255, 255, 255, 0.2)',
        'weather-accent': '#ffcc00',
        'weather-muted': '#f4f4f4',
      },
      backgroundImage: {
        'weather-gradient': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'weather-pattern': "url('/images/weather-pattern.svg')",
      },
      gradientColorStops: {
        'weather-start': '#4a90e2',
        'weather-mid': '#5a68c2',
        'weather-end': '#7e57c2',
      },
      spacing: {
        'weather-padding': '1.5rem',
        'weather-margin': '1.5rem',
        'weather-gap': '2rem',
      },
      boxShadow: {
        'weather-card': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'weather-input': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'weather-deep': '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
      typography: (theme) => ({
        weather: {
          css: {
            color: theme('colors.weather-text'),
            h1: {
              color: theme('colors.weather-primary'),
              fontWeight: 'bold',
            },
            h2: {
              color: theme('colors.weather-secondary'),
              fontWeight: 'semibold',
            },
            a: {
              color: theme('colors.weather-accent'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                color: theme('colors.weather-primary'),
              },
            },
            p: {
              lineHeight: '1.8',
            },
            blockquote: {
              borderLeftColor: theme('colors.weather-accent'),
              fontStyle: 'italic',
            },
          },
        },
      }),
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
      borderRadius: {
        'weather-sm': '0.5rem',
        'weather-md': '1rem',
        'weather-lg': '1.5rem',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
