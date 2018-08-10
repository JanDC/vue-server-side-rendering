const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const TARGET = process.env.npm_lifecycle_event;
console.log('target: ' + TARGET);

module.exports = {

        output: {
            path: path.resolve(__dirname, 'public/assets/js/'),
            filename: '[name].js',
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        process.env.NODE_ENV === 'development'
                            ? 'vue-style-loader'
                            : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        process.env.NODE_ENV === 'development'
                            ? 'vue-style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        'postcss-loader'
                    ]
                },
            ]
        },
        plugins: [
            new webpack.EnvironmentPlugin(['NODE_ENV']),
            new VueLoaderPlugin(),
            new ManifestPlugin(),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        ]
    
};