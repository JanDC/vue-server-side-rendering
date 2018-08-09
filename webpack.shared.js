const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'public/assets/js/'),
        filename: '[name].js',
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
};
