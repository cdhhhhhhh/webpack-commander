const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module:{
        rules:[
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
                        // options: {
                        //     modules: true,
                        // },
                    },
                    "postcss-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.sass|scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    }
}