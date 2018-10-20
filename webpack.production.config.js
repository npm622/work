const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const libName = 'work';

module.exports = (env = {}) => ({
  mode: 'production',
  entry: ['./src/index.tsx'],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(''),
        REPO_GIT_REV: JSON.stringify(process.env.REPO_GIT_REV),
        DB_VERSION: JSON.stringify(process.env.DB_VERSION),
        JS_SDK_VERSION: JSON.stringify(process.env.JS_SDK_VERSION),
        UI_VERSION: JSON.stringify(process.env.npm_package_version)
      }
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: { output: { comments: false } }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      { test: /\.svg/, use: 'svg-url-loader' },
      {
        test: /\.png$/,
        use: 'url-loader?limit=10000&mimetype=image/png',
      },
      {
        test: /.(png|jpg|jpeg|gif|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[hash].[ext]',
            limit: 10000,
            publicPath: '/static/',
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader?sourceMap=true', 'less-loader?sourceMap=true'],
      },
      {
        test: /favicon\.ico$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: `${__dirname}/dist/static`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-source-map',
});
