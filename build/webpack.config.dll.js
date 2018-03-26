const webpack = require('webpack');
const path = require('path');

const {version} = require('./../package.json');

module.exports = {
    entry: {
        'vue': [
            'vue', 'vue-router',
            'vuex',
            'axios', 'better-scroll'
        ]
    },
    output: {
        path: path.join(__dirname, '../dist/dll'),
        filename: `[name].${version}.js`,
        library: 'dll_[name]',
        publicPath: '../dist/dll/'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../dist/dll/', '[name].manifest.json'),
            name: 'dll_[name]'
        })
    ]
};
