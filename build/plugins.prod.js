const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = [
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
