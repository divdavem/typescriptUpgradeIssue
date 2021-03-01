const typescript = require("@rollup/plugin-typescript");

export default [
  {
    output: {
      file: "./dist/index.js",
      format: "cjs",
    },
    input: "./src/index.ts",
    plugins: [typescript()],
    external: ["winston"],
  },
];
