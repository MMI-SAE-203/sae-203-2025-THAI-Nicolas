// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
  integrations: [alpinejs()],
});
