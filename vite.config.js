import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir: "build",
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [ /linked-dep/, /node_modules/ ]
    }
  },
  optimizeDeps: {
    include: ['linked-dep'],
  }
})
