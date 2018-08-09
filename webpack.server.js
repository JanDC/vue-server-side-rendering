const merge = require('webpack-merge');
const sharedConfig = require('./webpack.shared.js');
const path = require('path');

module.exports = merge(sharedConfig, {
    mode: 'production',
    entry: {
        'entry-server': path.resolve(__dirname, './resources/assets/vue/entry-server.js'),
    },
    target: 'node'
});

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