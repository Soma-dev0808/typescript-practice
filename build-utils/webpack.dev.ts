const webpack = require('webpack');
const pathDev = require('path');
const DotenvDev = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins: [
        // Webapckプロセスでリンティングを行うために、ESLintPluginを使用。
        new ESLintPlugin({
            extensions: ['.ts', '.js', '.tsx', '.jsx'],
            exclude: 'node_modules'
        }),
        new DotenvDev({
            path: pathDev.resolve(__dirname, '..', './.env.dev'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 9000,
    },
};
