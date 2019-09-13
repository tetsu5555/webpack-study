const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        new CleanWebpackPlugin({
            dry: false,
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['**/*'],
        }),
        new HtmlWebpackPlugin({
            title: "webpack study",
            filename: "index.html",
            template: "src/index.html"
        })
    ]
};
