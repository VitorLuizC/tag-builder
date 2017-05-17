const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const style = new ExtractTextPlugin('css/style.css')

exports.rules = [
  {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: /(node_modules)/
  },
  {
    test: /\.vue$/,
    use: {
      loader: 'vue-loader',
      options: {
        loaders: {
          stylus: style.extract({
            fallback: 'vue-style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  paths: [
                    'node_modules'
                  ],
                  'resolve url': true,
                  'include css': true
                }
              }
            ]
          })
        }
      }
    }
  },
  {
    test: /\.pug$/,
    use: {
      loader: 'pug-loader',
      options: {
        pretty: true
      }
    }
  }
]

exports.plugins = [
  style,
  new HtmlPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/index.pug')
  })
]
