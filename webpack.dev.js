const ManifestPlugin = require("webpack-manifest-plugin")
const merge = require('webpack-merge');
const webpack = require("webpack")
const DashboardPlugin = require("webpack-dashboard/plugin");
const config = require("./webpack.config")
module.exports =  merge(config,{
    devServer: {
        hot: true,
        contentBase: './dist'
    },
    plugins: [
        new ManifestPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            "setvar":2222
        }),
        new DashboardPlugin(),

    ]
})