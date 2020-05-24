const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    plugins:[
        new CompressionPlugin({
            algorithm: "gzip",
            test: /\.js(\?.*)?$/i,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ]
}