const path = require('path');
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
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /node_modules/
        }
      ]
    }
  };