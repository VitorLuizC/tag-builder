const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

/**
 * Exporta a configuração necessária ao Webpack.
 * @param {('production'|'development')} env
 * @returns {webpack.Configuration}
 */
function build(env) {
  const suffix = env === 'production' ? 'prod' : 'dev'

  const config = require(`./config.${suffix}.js`)

  return {
    entry: './src',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name].js'
    },
    module: {
      rules: config.rules
    },
    plugins: config.plugins,
    devtool: env === 'production' ? false : 'source-map'
  }
}

module.exports = build
