import { defineConfig } from "tsup";
import { resolve } from "path";
import { copyFileSync, mkdirSync } from "fs";
import { join } from "path";

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
  },
  // Copy globals.css to dist after build
  onSuccess: () => {
    try {
      // Copy globals.css
      copyFileSync(
        join(__dirname, "src/styles/globals.css"),
        join(__dirname, "dist/globals.css")
      );
      
      // Copy variables.css from MyStyleD
      copyFileSync(
        join(__dirname, "../MyStyleD/build/css/_variables.css"),
        join(__dirname, "dist/_variables.css")
      );
      
      console.log("✅ Copied globals.css and _variables.css to dist");
    } catch (error) {
      console.error("❌ Failed to copy CSS files:", error);
    }
  }
});
