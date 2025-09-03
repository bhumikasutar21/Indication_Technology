// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//   },
//   plugins: [react(), mode === "development" && componentTagger()].filter(
//     Boolean
//   ),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// lazy import to avoid Netlify errors
const devPlugins = [];

if (process.env.NODE_ENV === "development") {
  try {
    const { componentTagger } = require("lovable-tagger");
    devPlugins.push(componentTagger());
  } catch {
    console.warn("lovable-tagger not available, skipping...");
  }
}

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), ...devPlugins],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
