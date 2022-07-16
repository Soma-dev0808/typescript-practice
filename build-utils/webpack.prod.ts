const pathProd = require('path');
const DotenvProd = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    plugins: [
        new DotenvProd({
            path: pathProd.resolve(__dirname, '..', './.env.prod'),
        }),
    ],
};
