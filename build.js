#!/usr/bin/env node
import { compile } from "@lwe8/build";

await compile({
  entry: "./src/index.js",
  format: "esm",
  outDir: "./dist",
  options: {
    allowJs: true,
    declaration: true,
    sourceMap: true,
  },
});
