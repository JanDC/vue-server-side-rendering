const merge = require('webpack-merge');
const sharedConfig = require('./webpack.shared.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = merge(sharedConfig, {
    mode: 'development',
    entry: {
        'entry-client': path.resolve(__dirname, './resources/assets/vue/entry-client.js'),
        'entry-server': path.resolve(__dirname, './resources/assets/vue/entry-server.js'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: 'localhost',
        port: 9000,
        stats: {
            colors: true
        },
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './resources/assets/vue/index.html'),
            inject: true
        }),
    ]
});
