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
    extend: {colors:{
      primary: {
        light: '#FFEBF1',
        DEFAULT: '#FF90B5',
        dark: '#F03A76',
      },
      secondary:{
        DEFAULT: "#14B8E4",
      },
      labradorite: {
        DEFAULT: "#575757"
      },
      black:{
        light: '#4A4A4A',
        DEFAULT: '#2D2D2D',
        dark: '#2C2B2B',
      }
    }},
  },
  plugins: [],
};
