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
              'css-loader',
              {
                loader: 'stylus-loader',
                options: {
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
    use: 'pug-loader'
  }
]

exports.plugins = [
  style,
  new HtmlPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/index.pug'),
    minify: {
      html5: true,
      removeComments: true,
      keepClosingSlash: false,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }
  })
]
