const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
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
    },
    module: {
        // rulesパラーメーターにはローダを適用するファイル(test)と適用するローダー(use)をセットで指定する
        rules: [
            {
                test: /\.css$/,
                // ローダーは指定された逆順に処理される
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 吐き出されるファイルの名前
            filename: 'style.css',
        }),
    ],
};
