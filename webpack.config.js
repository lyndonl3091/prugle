const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          }
      ]
    },
    resolve: {
      alias: {
        utils: path.resolve(__dirname, 'utils'),
        types: path.resolve(__dirname, 'src/actions/types')
      }
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./index.html",
          filename: "./index.html"
        })
      ]
  }