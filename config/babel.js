module.exports = {
    module:{
        rules:[
            {
                test: /\.js|.tsx?$/,
                exclude: /node_modules/,
                use: ["thread-loader", "cache-loader", "babel-loader"],
            }
        ]
    }
}