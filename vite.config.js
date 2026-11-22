import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  base: isGitHubActions ? '/personal-portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});