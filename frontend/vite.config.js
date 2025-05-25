import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:3000',
      // This proxy setting allows the frontend to communicate with the backend server 
    }
  },
  plugins: [react()],
})
