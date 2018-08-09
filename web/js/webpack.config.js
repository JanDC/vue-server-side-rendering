'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'entry-client': path.resolve(__dirname, './entry-server.js'),
    'entry-server': path.resolve(__dirname, './entry-client.js'),
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