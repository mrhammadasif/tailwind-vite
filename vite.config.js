import { defineConfig } from 'vite'

export default defineConfig( {
  base: "./",
  root: "src",
  publicDir: "../public",
  server: {
    port: 3333,
    open: true
  },
  build: {
    outDir: "../dist"
  }
} )