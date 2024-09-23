const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui'),],
  daisyui: {
    themes: {
      dark: {
        ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
        primary: '#3B82F6',
        'primary-focus': '#1e3a8a',
        secondary: '#78350f',
        accent: '#FFFFFF',
        neutral: '#262833',
        'base-100': '#3C3F50',
      },
    },
  },
};
