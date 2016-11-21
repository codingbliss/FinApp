'use strict';

var webpack = require('webpack');

module.exports = {
    context: __dirname + '/Client',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/Client/assets',
        filename: 'app.bundle.js',
        sourceMapFilename: 'app.js.map'
    },
    resolve: {
        modulesDirectories: ["node_modules", "lib"]
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                include: __dirname + '/Client', 
                loader: 'babel-loader',
                query: {compact: false}
            }
        ]
    }
};