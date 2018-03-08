const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'client', 'static', 'js'),
    filename: 'bundle.js',
    publicPath: __dirname
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__:"true"
    })
  ]
};

const serverConfig = {
  entry: './index.js',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'server.js',
    publicPath: __dirname
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__:"false",
    })
  ]
};

module.exports = [ browserConfig, serverConfig ];