const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const styleLoader = isProd ? MiniCssExtractPlugin.loader : "vue-style-loader";

  return {
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      publicPath: "/",
      filename: isProd ? "js/[name].[contenthash:8].js" : "build.js",
      chunkFilename: isProd ? "js/[name].[contenthash:8].js" : "[name].js",
      clean: true,
    },
    module: {
      rules: [
        // Images/fonts must be first so they are never parsed as JS
        {
          test: /\.(webp|png|jpe?g|gif|svg|ico|pdf)$/i,
          type: "asset/resource",
          generator: {
            filename: "[name][ext]",
          },
        },
        {
          test: /\.(eot|woff2?|ttf)$/i,
          type: "asset/resource",
          generator: {
            filename: "[name][ext]",
          },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.css$/,
          use: [styleLoader, "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            styleLoader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  silenceDeprecations: [
                    "import",
                    "global-builtin",
                    "color-functions",
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.sass$/,
          use: [
            styleLoader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  indentedSyntax: true,
                  silenceDeprecations: [
                    "import",
                    "global-builtin",
                    "color-functions",
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        scriptLoading: "defer",
      }),
      ...(isProd
        ? [
            new MiniCssExtractPlugin({
              filename: "css/[name].[contenthash:8].css",
              chunkFilename: "css/[name].[contenthash:8].css",
            }),
          ]
        : []),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "public"),
            to: path.resolve(__dirname, "dist"),
            globOptions: {
              ignore: ["**/.DS_Store"],
            },
          },
        ],
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery",
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isProd ? "production" : "development",
        ),
      }),
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
      extensions: [".js", ".vue", ".json"],
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: false,
      port: 8080,
      host: "127.0.0.1",
      static: {
        directory: path.join(__dirname, "public"),
        watch: false,
      },
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      watchFiles: {
        paths: ["src/**/*"],
        options: {
          ignored: /node_modules/,
        },
      },
    },
    performance: {
      hints: false,
    },
    optimization: {
      runtimeChunk: isProd ? "single" : false,
      splitChunks: isProd
        ? {
            chunks: "all",
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all",
              },
            },
          }
        : false,
    },
    devtool: isProd ? false : "eval-cheap-module-source-map",
  };
};
