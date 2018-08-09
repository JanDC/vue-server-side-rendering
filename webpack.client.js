const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const sharedConfig = require('./webpack.shared.js');
const path = require('path');

module.exports = merge(sharedConfig, {
    mode: 'development',
    entry: {
        'entry-client': path.resolve(__dirname, './resources/assets/vue/entry-client.js'),
    },
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './resources/assets/vue/index.html'),
            template: path.resolve(__dirname, './resources/assets/vue/index.html'),
            inject: true
        })
    ]
});