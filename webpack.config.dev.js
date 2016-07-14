var webpack = require('webpack');
var path = require('path');
var appname = "dev";
//加载一些插件 
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    devtool: "source-map",
    entry: [
        SRC_PATH + "/js/main"
    ],
    output: {
        path: BUILD_PATH + "/" + appname,
        publicPath: BUILD_PATH + "/" + appname,
        filename: "js/[name].js",
        chunkFilename: "js/[name].min.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap?style'
                )
            },
            { test: /.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css'],
    },
    plugins: [
        new ExtractTextPlugin("css/index.css"),
        new webpack.optimize.UglifyJsPlugin({ //压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require'] //排除关键字
        }),
        //添加我们的插件 会自动生成一个html文件
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: SRC_PATH + '/html/index.html',
            inject: true,
            hash: true,
        }),
        // new webpack.optimize.UglifyJsPlugin({ //压缩代码
        //     compress: {
        //         warnings: false
        //     },
        //     except: ['$super', '$', 'exports', 'require'] //排除关键字
        // })
    ],
};
