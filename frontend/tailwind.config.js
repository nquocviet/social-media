const plugin = require('tailwindcss/plugin')

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-45': {
      transform: 'rotateX(45deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
    '.rotate-x-135': {
      transform: 'rotateX(135deg)',
    },
    '.rotate-x-180': {
      transform: 'rotateX(180deg)',
    },
  })
})

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '536px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1280px',
      },
    },
    fontSize: {
      'display-2xl': 'var(--fs-display-2xl)',
      'display-xl': 'var(--fs-display-xl)',
      'display-lg': 'var(--fs-display-lg)',
      'display-md': 'var(--fs-display-md)',
      'display-sm': 'var(--fs-display-sm)',
      'display-xs': 'var(--fs-display-xs)',
      xl: 'var(--fs-text-xl)',
      lg: 'var(--fs-text-lg)',
      md: 'var(--fs-text-md)',
      sm: 'var(--fs-text-sm)',
      xs: 'var(--fs-text-xs)',
    },
    fontWeight: {
      light: 'var(--fw-light)',
      regular: 'var(--fw-regular)',
      semibold: 'var(--fw-semibold)',
      bold: 'var(--fw-bold)',
      black: 'var(--fw-black)',
    },
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
        red: {
          50: 'var(--red-50)',
          100: 'var(--red-100)',
          200: 'var(--red-200)',
          300: 'var(--red-300)',
          400: 'var(--red-400)',
          500: 'var(--red-500)',
          600: 'var(--red-600)',
          700: 'var(--red-700)',
          800: 'var(--red-800)',
          900: 'var(--red-900)',
        },
        yellow: {
          50: 'var(--yellow-50)',
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)',
          300: 'var(--yellow-300)',
          400: 'var(--yellow-400)',
          500: 'var(--yellow-500)',
          600: 'var(--yellow-600)',
          700: 'var(--yellow-700)',
          800: 'var(--yellow-800)',
          900: 'var(--yellow-900)',
        },
        green: {
          50: 'var(--green-50)',
          100: 'var(--green-100)',
          200: 'var(--green-200)',
          300: 'var(--green-300)',
          400: 'var(--green-400)',
          500: 'var(--green-500)',
          600: 'var(--green-600)',
          700: 'var(--green-700)',
          800: 'var(--green-800)',
          900: 'var(--green-900)',
        },
      },
      width: {
        avatar: 'var(--avatar-size)',
        checkbox: 'var(--checkbox-size)',
      },
      height: {
        checkbox: 'var(--checkbox-size)',
      },
      zIndex: {
        negative: 'var(--z-negative)',
        elevate: 'var(--z-elevate)',
        sticky: 'var(--z-sticky)',
        drawer: 'var(--z-drawer)',
        dropdown: 'var(--z-dropdown)',
        modal: 'var(--z-modal)',
        popover: 'var(--z-popover)',
        maximum: 'var(--z-maximum)',
      },
    },
  },
  plugins: [
    rotateX,
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
