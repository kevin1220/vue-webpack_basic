var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./src/js/main",
    output: {
        path: "./app",
        filename: "[name]"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css'],
    },
    plugins: [
        new ExtractTextPlugin("index.css"),
        new webpack.optimize.UglifyJsPlugin({ //压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require'] //排除关键字
        })
    ]
};
