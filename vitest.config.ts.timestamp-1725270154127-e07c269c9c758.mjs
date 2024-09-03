// vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { configDefaults, defineConfig as defineConfig2, mergeConfig } from "file:///D:/OneDrive/Documents/dev/node-js/project/siloam/Template%20Express/erp-template-vuetify/erp-template-vuetify/node_modules/vitest/dist/config.js";

// vite.config.ts
import Vue from "file:///D:/OneDrive/Documents/dev/node-js/project/siloam/Template%20Express/erp-template-vuetify/erp-template-vuetify/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL as URL2 } from "node:url";
import ViteFonts from "file:///D:/OneDrive/Documents/dev/node-js/project/siloam/Template%20Express/erp-template-vuetify/erp-template-vuetify/node_modules/unplugin-fonts/dist/vite.mjs";
import Components from "file:///D:/OneDrive/Documents/dev/node-js/project/siloam/Template%20Express/erp-template-vuetify/erp-template-vuetify/node_modules/unplugin-vue-components/dist/vite.js";
import { defineConfig } from "file:///D:/OneDrive/Documents/dev/node-js/project/siloam/Template%20Express/erp-template-vuetify/erp-template-vuetify/node_modules/vite/dist/node/index.js";
import Vuetify, { transformAssetUrls } from "file:///D:/OneDrive/Documents/dev/node-js/project/siloam/Template%20Express/erp-template-vuetify/erp-template-vuetify/node_modules/vite-plugin-vuetify/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/OneDrive/Documents/dev/node-js/project/siloam/Template%20Express/erp-template-vuetify/erp-template-vuetify/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    Vue({ template: { transformAssetUrls } }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      styles: {
        configFile: "src/assets/styles/settings.scss"
      }
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: "Inter",
            styles: "ital,opsz,wght@0,14..32,100..900;1,14..32,100..900"
          }
        ]
      }
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
  server: {
    open: true,
    port: 3e3
  }
});

// vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///D:/OneDrive/Documents/dev/node-js/project/siloam/Template%20Express/erp-template-vuetify/erp-template-vuetify/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxkZXZcXFxcbm9kZS1qc1xcXFxwcm9qZWN0XFxcXHNpbG9hbVxcXFxUZW1wbGF0ZSBFeHByZXNzXFxcXGVycC10ZW1wbGF0ZS12dWV0aWZ5XFxcXGVycC10ZW1wbGF0ZS12dWV0aWZ5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXG5vZGUtanNcXFxccHJvamVjdFxcXFxzaWxvYW1cXFxcVGVtcGxhdGUgRXhwcmVzc1xcXFxlcnAtdGVtcGxhdGUtdnVldGlmeVxcXFxlcnAtdGVtcGxhdGUtdnVldGlmeVxcXFx2aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9PbmVEcml2ZS9Eb2N1bWVudHMvZGV2L25vZGUtanMvcHJvamVjdC9zaWxvYW0vVGVtcGxhdGUlMjBFeHByZXNzL2VycC10ZW1wbGF0ZS12dWV0aWZ5L2VycC10ZW1wbGF0ZS12dWV0aWZ5L3ZpdGVzdC5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuaW1wb3J0IHsgY29uZmlnRGVmYXVsdHMsIGRlZmluZUNvbmZpZywgbWVyZ2VDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcbmltcG9ydCB2aXRlQ29uZmlnIGZyb20gJy4vdml0ZS5jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZUNvbmZpZyhcbiAgdml0ZUNvbmZpZyxcbiAgZGVmaW5lQ29uZmlnKHtcbiAgICB0ZXN0OiB7XG4gICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICAgIGV4Y2x1ZGU6IFsuLi5jb25maWdEZWZhdWx0cy5leGNsdWRlLCAnZTJlLyoqJ10sXG4gICAgICByb290OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSksXG4pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcZGV2XFxcXG5vZGUtanNcXFxccHJvamVjdFxcXFxzaWxvYW1cXFxcVGVtcGxhdGUgRXhwcmVzc1xcXFxlcnAtdGVtcGxhdGUtdnVldGlmeVxcXFxlcnAtdGVtcGxhdGUtdnVldGlmeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXGRldlxcXFxub2RlLWpzXFxcXHByb2plY3RcXFxcc2lsb2FtXFxcXFRlbXBsYXRlIEV4cHJlc3NcXFxcZXJwLXRlbXBsYXRlLXZ1ZXRpZnlcXFxcZXJwLXRlbXBsYXRlLXZ1ZXRpZnlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L09uZURyaXZlL0RvY3VtZW50cy9kZXYvbm9kZS1qcy9wcm9qZWN0L3NpbG9hbS9UZW1wbGF0ZSUyMEV4cHJlc3MvZXJwLXRlbXBsYXRlLXZ1ZXRpZnkvZXJwLXRlbXBsYXRlLXZ1ZXRpZnkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgVml0ZUZvbnRzIGZyb20gJ3VucGx1Z2luLWZvbnRzL3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBWdWV0aWZ5LCB7IHRyYW5zZm9ybUFzc2V0VXJscyB9IGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZXRpZnknO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIFZ1ZSh7IHRlbXBsYXRlOiB7IHRyYW5zZm9ybUFzc2V0VXJscyB9IH0pLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS1sb2FkZXIvdHJlZS9tYXN0ZXIvcGFja2FnZXMvdml0ZS1wbHVnaW4jcmVhZG1lXG4gICAgVnVldGlmeSh7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgY29uZmlnRmlsZTogJ3NyYy9hc3NldHMvc3R5bGVzL3NldHRpbmdzLnNjc3MnLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKCksXG4gICAgVml0ZUZvbnRzKHtcbiAgICAgIGdvb2dsZToge1xuICAgICAgICBmYW1pbGllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdJbnRlcicsXG4gICAgICAgICAgICBzdHlsZXM6ICdpdGFsLG9wc3osd2dodEAwLDE0Li4zMiwxMDAuLjkwMDsxLDE0Li4zMiwxMDAuLjkwMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlZmluZTogeyAncHJvY2Vzcy5lbnYnOiB7fSB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gICAgZXh0ZW5zaW9uczogWycuanMnLCAnLmpzb24nLCAnLmpzeCcsICcubWpzJywgJy50cycsICcudHN4JywgJy52dWUnXSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgb3BlbjogdHJ1ZSxcbiAgICBwb3J0OiAzMDAwLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZnQixTQUFTLGlCQUFBQSxzQkFBcUI7QUFDM2lCLFNBQVMsZ0JBQWdCLGdCQUFBQyxlQUFjLG1CQUFtQjs7O0FDRCtjLE9BQU8sU0FBUztBQUN6aEIsU0FBUyxlQUFlLE9BQUFDLFlBQVc7QUFDbkMsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVywwQkFBMEI7QUFMcVMsSUFBTSwyQ0FBMkM7QUFRbFksSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSSxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO0FBQUE7QUFBQSxJQUV4QyxRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsUUFDTixZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRLEVBQUUsZUFBZSxDQUFDLEVBQUU7QUFBQSxFQUM1QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSUMsS0FBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLElBQ0EsWUFBWSxDQUFDLE9BQU8sU0FBUyxRQUFRLFFBQVEsT0FBTyxRQUFRLE1BQU07QUFBQSxFQUNwRTtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOzs7QUR4Q2tWLElBQU1DLDRDQUEyQztBQUlwWSxJQUFPLHdCQUFRO0FBQUEsRUFDYjtBQUFBLEVBQ0FDLGNBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxNQUNKLGFBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxHQUFHLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDN0MsTUFBTUMsZUFBYyxJQUFJLElBQUksTUFBTUYseUNBQWUsQ0FBQztBQUFBLElBQ3BEO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbImZpbGVVUkxUb1BhdGgiLCAiZGVmaW5lQ29uZmlnIiwgIlVSTCIsICJVUkwiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJkZWZpbmVDb25maWciLCAiZmlsZVVSTFRvUGF0aCJdCn0K
