import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts', // Asegúrate de que este sea tu punto de entrada principal
      name: 'mj-my-storybook-react-components', // Elige un nombre para tu biblioteca
      fileName: (format) => `mj-my-storybook-react-components.${format}.js` // nombre de archivo de salida
    },
    rollupOptions: {
      // Este es opcional pero si quieres especificar externals puedes hacerlo aquí
      external: ['react', 'react-dom'],
      output: {
        // Asegúrate de que 'react' y 'react-dom' no se incluyan en el bundle final
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }

})
