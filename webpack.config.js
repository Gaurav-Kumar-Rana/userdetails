var path = require("path");
var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    watch:true,
    mode:'development',
    devtool:'source-map',
    devServer: {
        host: 'localhost',
        port: 8998,
        historyApiFallback: true,
    },
    entry:['./src/index.js','./src/styles/index.scss'],
    output:{
        filename:'build.js'
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
                use:["style-loader","css-loader","sass-loader"]
            },{
                test: /\.json$/,
                exclude : /node_modules/,
                use:{
                    loader: "json-loader"
                } 
            }]
    },
    resolve:{
        extensions:[".js"]
    }
}