const tailwind = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');

require('@fullhuman/postcss-purgecss');

module.exports = () => ({
  plugins: [tailwind, postcssPresetEnv()],
});
