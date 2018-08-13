const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const devMode = env !== 'production';
  
  return {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.jsx?$/,
          exclude: /node_modules/,
        },
        {
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
          test: /\.s?css$/,
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'style.css' }),
      new HtmlWebpackPlugin(({
        title: 'Expensify App',
        template: './src/index.html',
      }))
    ],
    devtool: devMode ? 'inline-source-map' : 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
}
};