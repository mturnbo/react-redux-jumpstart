const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');
const common = require('./webpack.common');

const BUILD = path.join(paths.BASE, 'dist');

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

module.exports = merge(common, {
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },
  plugins: [
    CleanWebpackPluginConfig
  ]
});
