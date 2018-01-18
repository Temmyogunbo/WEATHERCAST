const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.tsx'
    ],
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist'),
        publicPath: 'https://wherethercast.herokuapp.com/',

    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json',],
    },
    module: {

        rules: [
            {
                test: /\.tsx?$/,
                    loaders: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'resolve-url-loader',
                        'sass-loader?sourceMap'],
                }),
            },
            {
                test: /(\.css)$/,
                loader: ExtractTextPlugin
                    .extract('css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader')
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                query: { presets: ['es2015', 'react', 'stage-0'] },
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=1000000&mimetype=application/font-woff',
            },
            {
                test: /\.(svg|png|jpe?g)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            { test: /\.json$/, loader: 'json-loader' },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    },
    plugins: [
        new ExtractTextPlugin('./style.css'),
        new UglifyJSPlugin({
            parallel: 4,
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            "proces.env": {
                API_KEY: JSON.stringify(process.env.API_KEY)
            }
        }),
    ],
};
