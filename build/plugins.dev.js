const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = [
  new HtmlPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/index.pug')
  })
]
