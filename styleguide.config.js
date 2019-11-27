const path = require('path')

const {
  createConfig, babel, css, sass, match, file, typescript
} = require('webpack-blocks')

const pkg = require('./package.json')

module.exports = {
  title: "artz-controls-ui",
  components: "src/lib/**/*.tsx",
  usageMode: 'expand',
  webpackConfig: createConfig([
    typescript(),
    babel(),
    css(),
    match(['*.scss', '!*node_modules*'], [
      css(),
      sass(/* node-sass options */),
    ]),
    match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], [
      file(),
    ])
  ]),
  propsParser: require("react-docgen-typescript").parse
};