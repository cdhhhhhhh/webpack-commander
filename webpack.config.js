const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: "none",
    entry: {
        main: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "postcss-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.sass|scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.png$/,
                use: "url-loader",
            },
            {
                test: /\.js|.tsx?$/,
                exclude: /node_modules/,
                use: ["thread-loader", "cache-loader", "babel-loader"],
            },
        ],
    },
    optimization: {
        runtimeChunk: {
            name: "manifest",
        },
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 3,
            maxInitialRequests: 3,
            cacheGroups: {
                vendors: {
                    name: `chunk-vendors`,
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: "initial",
                },
                common: {
                    name: `chunk-common`,
                    minChunks: 2,
                    priority: -20,
                    chunks: "initial",
                    reuseExistingChunk: true,
                },
            },
        },
        usedExports: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
        }),
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        }),
        // new BundleAnalyzerPlugin()
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new ForkTsCheckerNotifierWebpackPlugin({
            title: "TypeScript",
            excludeWarnings: true,
            skipSuccessful: true,
        }),
        new friendlyErrorsWebpackPlugin(),
        new CompressionPlugin({
            algorithm: "gzip",
            test: /\.js(\?.*)?$/i,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
};
