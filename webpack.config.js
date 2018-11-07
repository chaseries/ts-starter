const path = require("path");
const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");
const isProduction = process.env.NODE_ENV === "production";


module.exports = {
  mode: isProduction ? "production" : "development",
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  entry: path.join(srcDir, "main.ts"),
  output: {
    path: distDir,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
