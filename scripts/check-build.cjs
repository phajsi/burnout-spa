#!/usr/bin/env node
/** Simple build verification script.
 *  Ensures Vite production output directory (dist/) exists and contains an index.html
 *  plus at least one JS asset. Adjust if you customize outDir.
 */
const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "dist");
let exitCode = 0;

function fail(msg) {
  console.error("\n[build:check] FAIL:", msg);
  exitCode = 1;
}

if (!fs.existsSync(buildDir)) {
  fail(
    "Dist directory not found: " + buildDir + " (did you run 'pnpm run build'?)"
  );
} else {
  const files = fs.readdirSync(buildDir);
  if (!files.includes("index.html")) {
    fail("index.html not emitted in dist/");
  }
  const jsAssets = files.filter((f) => /\.js$/.test(f));
  if (jsAssets.length === 0) {
    fail("No JavaScript assets found in build output");
  }
  if (exitCode === 0) {
    console.log("[build:check] PASS: build artifacts look reasonable");
  } else {
    console.log("[build:check] Files present:", files);
  }
}
process.exit(exitCode);
