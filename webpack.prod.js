// webpack.prod.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production", // Enables production optimizations
  entry: "./src/index.js", // Your application's entry point

  output: {
    filename: "main.[contenthash].js", // Use contenthash for cache busting
    path: path.resolve(__dirname, "dist"), // Output directory
    publicPath: "./", // Important for GitHub Pages: ensures assets are loaded relative to index.html
    clean: true, // Cleans the output directory before each build
  },

  // Recommended for production: generates separate source map files.
  // Set to false if you don't want source maps for production.
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into files
          "css-loader", // Translates CSS into CommonJS
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext][query]", // Keep images organized
        },
      },
      // If you want to support older browsers, you might add babel-loader here:
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Path to your HTML template
      filename: "index.html", // Output HTML filename
      minify: {
        // Minify HTML in production
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css", // Output CSS files with contenthash
    }),
  ],

  optimization: {
    minimize: true, // Tell Webpack to minimize the bundle
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin` for JS)
      `...`,
      new CssMinimizerWebpackPlugin(), // Minimize CSS
    ],
    // Optional: Split Chunks for more advanced optimization if your app grows
    // splitChunks: {
    //   chunks: 'all',
    // },
  },

  performance: {
    hints: "warning", // Show a warning if asset sizes are too large
    maxAssetSize: 250000, // in bytes (e.g., 244 KiB)
    maxEntrypointSize: 250000, // in bytes
  },
};
