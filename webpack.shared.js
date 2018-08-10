const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

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
            /*{
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
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            },*/
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ManifestPlugin()
    ]
};
