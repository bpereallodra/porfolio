import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/porfolio/', // <-- nombre exacto del repo entre slashes
  plugins: [react()],
})
