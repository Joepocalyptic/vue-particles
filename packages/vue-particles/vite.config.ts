import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
      name: "vue3-particles",
      fileName: format => `particles-vue.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "tsparticles-engine"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [vue(), dts()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src", import.meta.url))
    }
  }
});
