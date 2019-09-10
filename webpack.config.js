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
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        // リソースとして処理すべき属性を指定している
                        // img要素のsrc属性と全要素のdata-src属性をリソースとして処理する
                        attrs: ['img:src', ':data-src']
                    }
                }
            },
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
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            // Typescriptコードを処理するためのローダー
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.(gig|png|jpg|jpeg)$/,
                // useパラメーター配下ではオブジェクトとしてローダーを指定する
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // ファイルをDataUrl形式にするかファイルにするかを決める閾値をバイト単位で表す
                            // ここを下げるとファイルがbase64でなく、そのままimagesフォルダーがdistに吐き出されるようになる
                            limit: 51200,
                            // ファイルとして出力する場合の保存先をoutput-pathからの相対パスとして指定する
                            name: './images/[name].[ext]',
                        }
                    }
                ]
            },
            {
                // あらかじめ使うフォントが決まっているなら複数書かなくても良い
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 吐き出されるファイルの名前
            filename: 'style.css',
        }),
    ],
};
