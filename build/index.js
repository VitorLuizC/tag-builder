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

  return {
    entry: './src',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name].js'
    },
    module: {
      rules: require(`./rules.${suffix}.js`)
    },
    plugins: require(`./plugins.${suffix}.js`),
    devtool: env === 'production' ? false : 'source-map'
  }
}

module.exports = build
