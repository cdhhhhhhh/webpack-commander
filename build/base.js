const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Config = require("webpack-chain");
const path = require('path')
const {findSync} =  require('../lib/index')
const merge = require('webpack-merge')
const config = new Config();

config.entry('main')
      .add("./src/main.js")
      .end()
      .output
      .path(path.resolve(__dirname, path.resolve('dist')))
      .filename("[name].[hash].js")
      .end()

config.plugin('clean').use(CleanWebpackPlugin)

let webpackConfig = config.toConfig();
findSync(path.resolve('config')).forEach((item)=>{       
    webpackConfig = merge(webpackConfig, item);
});

module.exports = webpackConfig;
