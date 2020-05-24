const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
module.exports = {
    plugins:[
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new ForkTsCheckerNotifierWebpackPlugin({
            title: "TypeScript",
            excludeWarnings: true,
            skipSuccessful: true,
        }),
        new friendlyErrorsWebpackPlugin(),
    ]
}