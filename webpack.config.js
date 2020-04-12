const path = require('path');

// CommonJS模块规范
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        // 根据入口起点名称动态生成 bundle 名称
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}