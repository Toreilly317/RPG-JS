const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map"
};
