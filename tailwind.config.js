module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '766px', // Use sparingly
      lg: '978px',
      xl: '1280px',
    },
    extend: {
      fontSize: {
        sm: '0.95rem',
      },
      minHeight: {
        '64': '16rem',
      },
      padding: {
        '1.5': '0.38rem',
      },
      backgroundColor: {
        'btn-blue': '#6c63ff',
        'btn-blue-hover': '#8c8aff',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
