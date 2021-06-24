const merge                    = require('webpack-merge')
const baseWebpackConfig        = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    publicPath: './',
    clean: true
  },
  devtool: 'source-map',
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
