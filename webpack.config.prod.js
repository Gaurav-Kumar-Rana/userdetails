var path = require("path");
var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    watch:true,
    mode:'production',
    devtool:'source-map',
    entry:['./src/index.js','./src/styles/index.scss'],
    output:{
        publicPath:'../asset/js',
        filename:'../asset/js/index.bundle.js'
    },
    module:{
        rules:[{ 
                test: /\.js$/,
                exclude : /node_modules/,
                use:{
                    loader: "babel-loader"
                } 
            },
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
            }]
    },
    resolve:{
        extensions:[".js",".scss"]
    },
    plugins: [
        new MiniCssExtractPlugin({
          publicPath:'../asset/css',
          filename:'../asset/css/main.css'
        }),
        new CopyWebpackPlugin([
            {from:'src/data_source',to:'../asset/data_source'},
            {from:'asset',to:'../build/asset'}  
        ]), 
      ],
}