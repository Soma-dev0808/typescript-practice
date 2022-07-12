const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins: [
        new ESLintPlugin(),
        new Dotenv({
            path: path.resolve(__dirname, '..', './.env.dev'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 9000,
    },
};
