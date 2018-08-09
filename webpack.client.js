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
    output: {
        path: path.resolve(__dirname, 'public/assets/js/'),
        filename: '[name].js',
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
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
});