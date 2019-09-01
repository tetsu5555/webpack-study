module.exports = {
    // エントリーポイント
    entry: './src/index.js',
    // 出力設定
    output: {
        // 出力先のフォルダー
        // ${__dirname}はプロジェクトフォルダーのパスを表す
        path: `${__dirname}/dist`,
        // 出力先のファイル名
        filename: 'main.js'
    },
    // /distがルートになる
    devServer: {
        contentBase: './dist'
    }
};
