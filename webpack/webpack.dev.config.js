const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '..', '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
      }
    ]
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    proxy: {
      "/": "http://localhost:3000"
    },
    hot: true
  }
};