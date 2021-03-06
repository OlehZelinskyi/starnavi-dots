const HtmlWepackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@components": path.resolve(__dirname, "src", "components"),
      "@typings": path.resolve(__dirname, "src", "typings"),
      "@redux": path.resolve(__dirname, "src", "redux"),
      "@utils": path.resolve(__dirname, "src", "utils"),
    },
  },
  devServer: {
    compress: false,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWepackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
