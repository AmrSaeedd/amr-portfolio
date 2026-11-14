import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        alamElRoum: resolve(__dirname, 'projects/alam-el-roum.html'),
        sohag: resolve(__dirname, 'projects/sohag.html'),
        detailed: resolve(__dirname, 'projects/detailed-urban-planning.html'),
        landscape: resolve(__dirname, 'projects/landscape-architecture.html'),
        westQena: resolve(__dirname, 'projects/west-qena.html'),
        school: resolve(__dirname, 'projects/vocational-school.html'),
        villa: resolve(__dirname, 'projects/villa-workshop.html'),
      },
    },
  },
  publicDir: 'public',
})
