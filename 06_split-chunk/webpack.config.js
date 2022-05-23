const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

// babel
// babel-loader @babel/core @babel/preset-env

// split-chunk
// 入口起点
// 防止重复
// 动态导入

module.exports = {
  mode: "development",
  entry: {
    // 多入口
    // main: {
    //   import: "./src/main.js",
    //   dependOn: "shared",
    // },
    // another: {
    //   import: "./src/another-entry.js",
    //   dependOn: "shared",
    // },
    // shared: "lodash",
    main: "./src/main.js",
    another: "./src/another-entry.js",
  },
  output: {
    filename: "[name]_bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[contenthash][ext]", //统一打包生成的资源名字
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      // filename:'',
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash].css",
    }),
  ],
  // 资源模块
  // asset/resource导出url   asset/inline导出资源的DataUri   asset/source 导出资源的源代码
  // asset 通用自动选择  在resource和inline之间
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource",
        generator: {
          filename: "images/[contenthash][ext]", //单独打包生成的资源名字
        },
      },
      {
        test: /\.svg$/,
        type: "asset/inline", //data-url-base64格式
      },
      {
        test: /\.text$/,
        type: "asset/source",
      },
      {
        test: /\.jpg$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
        // 资源 >8kb 的时候生成资源   资源  <8kb 的时候生成base链接
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },

      // babel-loader
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],
    // 防止重复
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: "./dist",
  },
};
