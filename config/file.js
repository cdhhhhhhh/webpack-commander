module.exports = {
    module:{
        rules:[
            {
                test: /\.(ttf|png|eot|woff|woff2)$/,
                loader: 'url-loader',
            }
        ]
    }
}