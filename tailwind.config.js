import VitePluginSass from 'vite-plugin-sass';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    VitePluginSass({
      // Options de configurations pour sass a mettre ici
    }),
  ],
}

