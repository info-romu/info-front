import VitePluginSass from 'vite-plugin-sass';
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'xs': '570px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    VitePluginSass({
      // Options de configurations pour sass a mettre ici
    }),
  ],
}

