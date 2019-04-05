const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');
const common = require('./webpack.common');

const BUILD_PATH = path.join(paths.BASE_PATH, 'dist');

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

module.exports = merge(common, {
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  plugins: [
    CleanWebpackPluginConfig
  ]
});
