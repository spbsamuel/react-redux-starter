const path = require('path');
const webpack = require('webpack');

const ENV_GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  '__DEV__': JSON.stringify(process.env.NODE_ENV === 'development'),
  '__PROD__': JSON.stringify(process.env.NODE_ENV === 'production'),
};

module.exports =
  {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/app.js',
    ],
    output: {
      publicPath: '/static/',
      filename: 'app.js'
    },
    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname, "src"),
      ],
      mainFiles: ["index.js"],
    },
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin(ENV_GLOBALS),
      new webpack.HotModuleReplacementPlugin(),
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
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]---[local]',
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, "src")]
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          loader: 'url-loader',
          options: {
            name: '[name]-[hash:base64:10].[ext]',
            limit: 8192,
          },
          exclude: /node_modules/
        },
      ]
    }
  };