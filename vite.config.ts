import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'My Storybook React Components', // Elige un nombre para tu biblioteca
      formats: ['es', 'umd'], // formatos de salida (se requiere al menos uno)
      fileName: (format) => `mj-my-storybook-react-components.${format}.js` // nombre de archivo de salida
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }

})
