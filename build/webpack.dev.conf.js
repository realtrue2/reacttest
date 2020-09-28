const webpack = require('webpack');
const { merge } = require('webpack-merge/dist/index');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',

    devtool: 'cheap=module-eval-source-map',

    devServer: {
        contentBase : baseWebpackConfig.externals.paths.dist,
        overlay: {
            warnings: true,
            errors: true
        },

        // host: '192.168.0.106',
        port: 8080,
        // disableHostCheck: true
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});



module.exports = new Promise((resolve, reject) => {
        resolve(devWebpackConfig);
});
