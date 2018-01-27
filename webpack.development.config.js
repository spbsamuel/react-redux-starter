const path = require('path');

module.exports =
  {
    entry: [
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
            'sass-loader'
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