const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// CommonJS模块规范
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        // 根据入口起点名称动态生成 bundle 名称
        filename: '[name].bundle.js',
        // output 目录对应一个绝对路径，配置输出文件的路径，这里是指根目录下的dist文件夹
        path: path.resolve(__dirname, 'dist')
    }
}