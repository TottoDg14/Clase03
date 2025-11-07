import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://qa.viogp.com:9042',
        changeOrigin: true,
        secure: false, // Ignorar problemas de certificado SSL
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
