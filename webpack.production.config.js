const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

const ENV_GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  '__DEV__': JSON.stringify(process.env.NODE_ENV === 'development'),
  '__PROD__': JSON.stringify(process.env.NODE_ENV === 'production'),
};

module.exports =
  {
    mode: 'production',
    entry: [
      './src/app.js',
    ],
    output: {
      path: PATHS.dist,
      filename: 'static/app.[chunkhash].js'
    },
    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname, "src"),
      ],
      mainFiles: ["index.js"],
    },
    plugins: [
      new webpack.DefinePlugin(ENV_GLOBALS),
      new HtmlWebpackPlugin({
        template: 'index.template.html'
      }),
      new ExtractTextPlugin({
        filename: 'static/style.[chunkhash].css',
        allChunks: true
      })
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions:{
            compress: {
              unused: true,
              dead_code: true,
              warnings: false
            }
          }
        }),
      ]
    },
    module: {
      rules: [
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
            name: 'static/[name]-[hash:base64:10].[ext]',
            limit: 8192,
          },
          exclude: /node_modules/
        },
      ]
    }
  };