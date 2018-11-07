const path = require("path");
const srcDir = path.resolve(__dirname, "src");
const buildDir = path.resolve(__dirname, "build");
const isProduction = process.env.NODE_ENV === "production";


module.exports = {
  mode: isProduction ? "production" : "development",
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  entry: path.join(srcDir, "main.ts"),
  output: {
    path: buildDir,
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
