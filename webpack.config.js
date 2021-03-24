const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    devServer: {
        contentBase: path.join(__dirname, '/'),
        publicPath: '/dist/',
        hot: true,
        port: 8080,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'index.html'),
            hash: true,
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
}

module.exports = conf;