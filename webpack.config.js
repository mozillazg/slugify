require('es6-promise').polyfill();

var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var JS_PATH = path.resolve(ROOT_PATH, 'static/js');
var CSS_PATH = path.resolve(ROOT_PATH, 'static/css');

var config = {
  entry: {
    app: [path.resolve(JS_PATH, 'component'),
      path.resolve(JS_PATH, 'main')],
      vendors: ['react', 'react-dom']
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    modulesDirectories: ['node_modules', 'static'],
  },

  output: {
    path: BUILD_PATH,
    publicPath: '',
    filename: '[name].js',
    libray: ['[name'],
    pathInfo: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true'
        )
      },
      {
        test: /\.(png|jpg|svg|ico)$/,
        loader: "file-loader?name=[path][name].[ext]"
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/templates/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],

  devtool: 'source-map',
  devServer: {
    contentBase: BUILD_PATH,
    historyApiFallback: true,
    proxy: {
      '/slugify': {
        target: 'http://127.0.0.1:7000',
        secure: false,
      }
    }
  }
};

module.exports = config;
