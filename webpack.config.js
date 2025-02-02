const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./wysiwig.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    mode: "development",
};
