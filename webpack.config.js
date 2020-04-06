const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            }
            // {
            //     test: /\.pug$/,
            //     loaders: [
            //         'file-loader?name=./[name].html',
            //         // 'extract-loader',
            //         // 'html-loader',
            //         'pug-html-loader'
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public'
    }
}
