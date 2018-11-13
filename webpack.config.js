const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

const otherResourcesStr = /\.(eot|gif|jpeg|jpg|png|svg|ttf|woff)([\?]?.*)$/;
module.exports = {
    entry: {
        app: [
            "./src/app.tsx",
            "./src/app.scss"
        ]
    },
    output: {
        filename: "app.js",
        path: path.join(__dirname, "build"),
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    devServer: {
        proxy: {
            "/api": {
                changeOrigin: true,
                target: "https://localhost:8443/api",
                secure: false,
            }
        }
    },

    module: {
        loaders: [

            {
		test: /\.tsx?$/,
		loader: "awesome-typescript-loader"
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"    
            }),
            },
            {
                test: /\.scss$/,
                use: [
                     { loader: "style-loader" },
                     { loader: "css-loader" },
                     { loader: "sass-loader" },
                ],
            },
            {
                test: otherResourcesStr,
                include: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "src")
                ],
                loader: "file-loader",
                query: {
                    name: "[path][name].[ext]",
                },
            },
        ],
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlPlugin({
            minify: {
                collapseWhitespace: true,
            },
            template: path.resolve(__dirname, "src/index.html"),
            title: "GoPlay",
        }),
    ], 
};
            

