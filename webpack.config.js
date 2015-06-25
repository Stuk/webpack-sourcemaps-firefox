/*eslint-env node */
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: '.',
        filename: 'bundle.js',
        devtoolModuleFilenameTemplate: '[resource-path]'
    },
    devtool: 'source-map'
};
