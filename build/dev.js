const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Config = require("webpack-chain");
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const path = require("path");
const { findSync } = require("../lib/index");
const merge = require("webpack-merge");
const config = new Config();

config
    .entry("main")
    .add("./src/main.js")
    .end()
    .output.path(path.resolve(__dirname, path.resolve("dist")))
    .filename("[name].[hash].js")
    .end()
    .watch(true)
    .watchOptions({
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll:1000
    });

config.plugin("clean").use(CleanWebpackPlugin).end();
config.devServer
    // .publicPath(path.resolve(''))
    .contentBase(path.resolve("../"))
    .quiet(true)
    .hot(true)
    .https(false)
    .disableHostCheck(true)
    .proxy({
        "/api": {
            target: "http://localhost:9092",
        },
    })

let webpackConfig = config.toConfig();
findSync(path.resolve("config")).forEach((item) => {
    webpackConfig = merge(webpackConfig, item);
});

let compiler = webpack(webpackConfig);
let webpackDevConfig = compiler.options.devServer;

const server = new WebpackDevServer(
    compiler,
    Object.assign(webpackDevConfig, {
        before(){
            console.log('sss');
            
        }
    })
);
server.listen(8080);

new Promise(() => {
    compiler.hooks.done.tap("dev", (stats) => {
        const empty = "    ";
        const common = `App running at:
      - Local: http://127.0.0.1:${port}${publicPath}\n`;
        console.log(chalk.cyan("\n" + empty + common));
    });
});
