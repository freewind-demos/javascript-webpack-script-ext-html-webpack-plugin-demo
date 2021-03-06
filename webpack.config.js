const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ScriptExtHtmlWebpackPlugin({
            inline: ['bundle.js']
        })
    ]
}
