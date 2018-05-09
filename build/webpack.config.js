/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const webpack = require("webpack");
const path = require("path");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const packageJSON = require("../package.json");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const monitor = process.env.MONITOR || false;
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const resolve = dir => path.join(__dirname, "..", dir);
const production = process.env.NODE_ENV === "production";

const moduleResolves = require("./resolves.js");
const cssLoaders = require("./cssLoaders.js");

const ExtractSASSConfig = {
  filename: "style.[hash].css",
};
const ExtractSASS = new ExtractTextPlugin(ExtractSASSConfig);

module.exports = {
  mode: production ? "production" : "development",

  entry: {
    app: "./src/index.js",

    ...(!production ? {
      vendor: [
        "webpack/hot/only-dev-server",
        "webpack-dev-server/client?http://localhost:8080",
      ],
    } : {}),
  },

  output: {
    path: resolve("dist"),
    filename: "[name].[chunkhash].js",
  },

  performance: {
    hints: false,
  },

  devServer: production ?
    {} :
    {
      hot: true,
      overlay: true,
      quiet: true,
      historyApiFallback: true,
      contentBase: `${__dirname}/../public`,
      proxy: {
        "/api": "http://localhost:3000",
      },
    },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  devtool: production ? "#none" : "#cheap-module-eval-source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.sass$/,
        use: cssLoaders(production, "sass", ExtractSASS),
      },
      {
        test: /\.scss$/,
        use: cssLoaders(production, "scss", ExtractSASS),
      },
      {
        test: /\.css$/,
        use: cssLoaders(production, "css", ExtractSASS),
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|mp3)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8000,
            name: "images/[name]__[hash].[ext]",
          },
        }],
      },
    ],
  },

  ...moduleResolves,

  plugins: [
    new webpack.DefinePlugin({
      "process.env.VERSION": JSON.stringify(packageJSON.version),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: resolve("src/pug/index.pug"),
    }),

    ...production ?
      [
        new FaviconsWebpackPlugin({
          logo: resolve("assets/favicon.png"),
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: false,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false,
          },
        }),
        ExtractSASS,
        new CopyWebpackPlugin([
          { context: "./public", from: "**/*", to: "./" },
        ]),
      ] :
      [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin(),
      ],

    ...monitor ? [new BundleAnalyzerPlugin({
      generateStatsFile: false,
    })] : [],
  ],
};