import {fileURLToPath, URL} from "url";
import {resolve, dirname} from "node:path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), "./src/locales/**"),
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import \"@/assets/scss/custom/variables.scss\";"
      }
    }
  },
});
