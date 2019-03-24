const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const libName = '[name]';

module.exports = (env = {}) => ({
  mode: env.build ? 'production' : 'development',
  entry: {
    app: './src/app/index.tsx',
    components: './src/components/index.ts',
    layouts: './src/layouts/index.ts',
    pages: './src/pages/index.ts',
    store: './src/store/index.ts'
  },
  // entry: __dirname + '/src/index.ts',
  devtool: env.build ? 'cheap-source-map' : 'inline-source-map',
  output: {
    filename: `[name]${env.build ? '.min' : ''}.js`,
    path: path.resolve(__dirname, 'dist/web'),
    library: 'makes-apps',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
        exclude: /node_modules/,
      },
      {
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: env.build
    ? [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
          },
        }),
      ]
    : [],
});
