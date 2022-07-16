const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = ({ env }: { env: string }) => {
    const envConfig = require(`./webpack.${env}.ts`);

    return merge(commonConfig, envConfig);
};
