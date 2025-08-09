import { defineConfig } from "tsup";
import { resolve } from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react", "react-dom"],
  sourcemap: true,
  clean: true,
  outDir: "dist",
  // Copy CSS files to dist
  loader: {
    ".css": "copy"
  },
  // Optimize bundle size
  minify: false, // Let build:prod handle minification
  splitting: false, // Single bundle for library
  treeshake: true,
  esbuildOptions(options) {
    options.alias = {
      '@': resolve('./src')
    };
    // Optimize for library usage
    options.define = {
      'process.env.NODE_ENV': '"production"'
    };
  }
});
