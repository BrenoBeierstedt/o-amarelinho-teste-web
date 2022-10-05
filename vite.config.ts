import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'http://api:4000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    }
  })
}
