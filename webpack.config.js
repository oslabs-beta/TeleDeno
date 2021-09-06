const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ['regenerator-runtime/runtime.js', './client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'), //watch it. default is "dist"
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 8080,
    inline: true,
    compress: true,
    hot: true,
    publicPath: '/',
    proxy: {
      '/**': 'http://localhost:3000'
      // '/api/**': {
      //   target: 'http://localhost:3000',
      //   secure: false,
      //   changeOrigin: true, 
      //   onProxyReq: (proxyReq) => {
      //   proxyReq.setHeader('Cookie', cookie);
      //   },
      // }

    },
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Production',
    template: 'index.html'
 }), new MiniCssExtractPlugin(), new CopyPlugin({
    patterns: [
      { from: "assets", to: "assets" },
    ],
  }),],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {

      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  }
};
