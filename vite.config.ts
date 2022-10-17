import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
            target: 'https://amarelinho-api.onrender.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    }
  })
}
