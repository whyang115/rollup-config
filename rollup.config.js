import json from "rollup-plugin-json"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"

export default {
  input: "src/index.js",
  output: {
    file: "build/build.js",
    format: "cjs",
    globals: { lodash: "_" },
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true
    }),
    commonjs(),
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    json()
  ],
  external: ["dayjs", "lodash"]
}