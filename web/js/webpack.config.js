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

// 'use strict'

// const { VueLoaderPlugin } = require('vue-loader')
// const path = require('path');

// module.exports = {
//   mode: 'production',
//   output: {
//     filename: 'server.bundle.js',
//     libraryTarget: 'commonjs2'
//   },
//   entry: {
//     'entry-server': path.resolve(__dirname, './entry-client.js'),
//   },
//   optimization: {
//     minimize: false,
//   },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     },
//     extensions: ['*', '.js', '.vue', '.json']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         use: 'vue-loader'
//       }
//     ]
//   },
//   plugins: [
//     new VueLoaderPlugin()
//   ]
// }