const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  target: ['web', 'es5'],
  entry: {
    app: './src/index.js',
    another: './src/another.js'
  },
  plugins: [
    /*new webpack.ProgressPlugin((percentage, message, ...args) => {
      console.info(`${(percentage * 100).toFixed(2)}%`, message,...args);
    }),*/
    new HtmlWebpackPlugin({
      title: 'PCS Webpack Demo',
      year: new Date().getFullYear(),
      template: './src/index.html'
    }),
    new ESLintPlugin(),
    new webpack.BannerPlugin(`Copyright PCS ${new Date().getFullYear()}`),
    new CompressionPlugin()
  ],
  output: {
    publicPath: '',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      /*{
        test: /\.html$/i,
        loader: "html-loader",
      },*/
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset'/*,
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          }
        }*/
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        }
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};