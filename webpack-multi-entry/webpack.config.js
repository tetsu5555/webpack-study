const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        sub:  './src/sub.js'
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name]-[chunkhash].js',
    },
    // 共通のライブラリをcommonlibという共通ファイルにバンドルする
    optimization: {
        splitChunks: {
            name: 'commonlib',
            chunks: 'initial',
        }
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack study",
            filename: "index.html",
            template: "src/index.html"
        })
    ]
};
