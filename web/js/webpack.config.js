'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'entry-client': path.resolve(__dirname, './entry-client.js'),
    'entry-server': path.resolve(__dirname, './entry-server.js'),
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}