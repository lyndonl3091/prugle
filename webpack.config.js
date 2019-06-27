const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
      proxy: {
        '/': {
          target: 'http://localhost:3000'
        }
      }
    },
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
        },
        {
          test: /\.scss$/,
          use: [
              "style-loader",
              "css-loader", 
              "sass-loader"
          ]
        }
      ]
    },
    resolve: {
      alias: {
        actions: path.resolve(__dirname, 'src/actions'),
        api: path.resolve(__dirname, 'src/api'),
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        utils: path.resolve(__dirname, 'src/utils'),
        src: path.resolve(__dirname, 'src'),
        styles: path.resolve(__dirname, 'src/styles'),
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