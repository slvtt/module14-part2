const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const filename = ext => isDev ?
    `[name].${ext}` :
    `[name].[fullhash].${ext}`;

let conf = {
    entry: {
        main: ['@babel/polyfill', './index.js']
    },
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
    },
    context:path.resolve(__dirname, 'src'),
    
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html',
            minify: {
                collapseWhitespace: !isDev
            }
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
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    },
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    },
    devServer: {
        contentBase: './build',
        hot: true,
        port: 8080,
        open: true,
        writeToDisk: false,
    },
}

module.exports = conf;