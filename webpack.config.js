const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const path = require("path");

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",

  devtool: argv.mode === "production" ? false : "inline-source-map",

  entry: {
    ui: "./src/ui.tsx",
    code: "./src/code.ts",
  },

  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },

      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },

      { test: /\.(png|jpg|gif|webp|svg)$/, loader: "url-loader" },
    ],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    modules: ["node_modules", path.join(__dirname, "node_modules")],
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/ui.html",
      filename: "ui.html",
      chunks: ["ui"],
      cache: false,
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
  ],
});
