const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
module.exports = {
    plugins:[
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
        })
    ]
}