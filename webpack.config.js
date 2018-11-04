const path = require('path');

module.exports = {
  entry: { main: './src/graphql-schema-remote/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main_2.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
};
