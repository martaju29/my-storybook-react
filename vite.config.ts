import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts', // Asegúrate de que este sea tu punto de entrada principal
      name: 'mj-my-storybook-react-components', // Elige un nombre para tu biblioteca
      fileName: (format) => `index.${format}.js` // nombre de archivo de salida
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  }

})
