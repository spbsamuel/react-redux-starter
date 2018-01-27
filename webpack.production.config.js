const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports =
  {
    entry: [
      './src/app.js',
    ],
    output: {
      path: PATHS.dist,
      publicPath: '/dist/',
      filename: 'app.js'
    },
    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname, "src"),
      ],
      mainFiles: ["index.js"],
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          unused: true,
          dead_code: true,
          warnings: false
        }
      }),
      new ExtractTextPlugin({
        filename: 'app.css',
        allChunks: true
      })
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[hash:base64:10]',
                }
              },
              'sass-loader'
            ],
          }),
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
          exclude: /node_modules/
        },
      ]
    }
  };