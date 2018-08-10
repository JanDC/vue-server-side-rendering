const merge = require('webpack-merge');
const sharedConfig = require('./webpack.shared.js');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(sharedConfig, {
    mode: 'production',
    entry: {
        'entry-server': path.resolve(__dirname, './resources/assets/vue/entry-server.js'),
    },
    target: 'node',
    optimization: {
        splitChunks: false,
    },
    output: {
        libraryTarget: 'commonjs2',
    },
    externals: nodeExternals(),
});