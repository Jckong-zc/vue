const path = require('path'); //内置模块
const webpack = require('webpack'); //第三方模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    // 设置开发环境
    mode: "development",
    // 入口  你需要拿来做处理的文件
    // 读取src文件夹的index.js文件，把它交给webpack处理
    // 相当于gulp.src("xxxx")
    entry: './src/index.js',
    // 出口
    // 把上面入口文件经过处理后，把它导出到dist文件夹的bundle.js里面
    // 相当于gulp.dest("xxxx")
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js'
    },
    // webpack只能理解js，如果你要处理其他文件，那就要使用loader，loader的本质其实就是插件
    module: {
        // 插件规则
        rules: [{
            // 如果匹配到图片格式使用url-loader处理
            // npm install --save-dev url-loader
            test: /\.(jpg|jpeg|png|gif)$/,
            use: 'url-loader'
        }, {
            // 如果匹配到样式
            // npm install --save-dev style-loader和css-loader
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        // 它作为打包之后生成的index.html模板
        new HtmlWebpackPlugin({
            template: './template/index.html'
        }),
        // 压缩文件
        new UglifyJsPlugin()
    ]
};