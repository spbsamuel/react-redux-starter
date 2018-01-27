const path = require('path');
const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports =
  {
    entry: [
      './src/app.js',
      './src/app.scss'
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
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /node_modules/
        }
      ]
    }
  };