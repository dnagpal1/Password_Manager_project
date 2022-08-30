const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
            // publicPath: '/build',
        },
        // port: 3000,
        proxy: {
            '/api': 'http://localhost:3000',
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    plugins: [new HtmlWebpackPlugin(
        {template: './src/index.html'}
    )],
}