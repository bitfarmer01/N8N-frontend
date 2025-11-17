import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite Configuration
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    // Enables React support, including JSX transformation and Fast Refresh.
    react()
  ],
  
  /**
   * The `base` option is crucial for correct deployment.
   * By default, Vite uses absolute paths ('/'). For hosting on GitHub Pages
   * in a repository (e.g., `user.github.io/repo-name`), paths need to be relative.
   * Setting `base: './'` ensures that all asset links (JS, CSS) are generated
   * relative to the `index.html` file, making the built application portable.
   */
  base: './',
});
