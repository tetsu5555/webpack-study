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
    optimization: {
        splitChunks: {
            name: 'commonlib',
            chunks: 'initial',
        }
    },
    devServer: {
        contentBase: './dist'
    },
};
