const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
            hash: true,
            template: '/index.html',
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
}

module.exports = conf;