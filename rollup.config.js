import typescript from "rollup-plugin-typescript2"
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from '@rollup/plugin-url'
import { terser } from 'rollup-plugin-terser'

import pkg from "./package.json"

export default [
  {
    input: "src/index.ts",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
        sourceMap: 'inline',
      }),
      external({
        includeDependencies: true,
      }),
      url(),
      resolve(),
      terser(),
      typescript({
        typescript: require("typescript"),
        objectHashIgnoreUnknownHack: true
      })
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" }
    ]
  }
];
