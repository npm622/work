const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const libName = 'mtbw-web';

module.exports = (env = {}) => ({
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:6220',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg/,
        use: 'svg-url-loader'
      },
      {
        test: /.(png|jpg|jpeg|gif|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[hash].[ext]',
            limit: 10000
          }
        }
      },
      {
        test: /\.less$/,
        loader: [
          { loader: 'style-loader' },
          { loader: 'css-loader?sourceMap=true' },
          { loader: 'less-loader?sourceMap=true' }
        ]
      },
      {
        test: /favicon\.ico$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]'
          }
        }
      },
    ]
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/'
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 6220,
    historyApiFallback: true,
    hot: true,
    progress: true
  }
});
