


const merge = require('webpack-merge');
const sharedConfig = require('./webpack.shared.js');
const path = require('path');

module.exports = merge(sharedConfig, {
    mode: 'production',
    entry: {
        'entry-client': path.resolve(__dirname, './resources/assets/vue/entry-client.js'),
    },
});