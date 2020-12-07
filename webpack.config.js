const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const webpack = require("webpack");
const path = require("path");
module.exports = {
  ...defaultConfig,
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "mybundle.js",
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
};
