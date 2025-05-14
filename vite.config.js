import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // Host para ver el proyecto en el celular
    host: '0.0.0.0',
    port: 5173
  }
})
