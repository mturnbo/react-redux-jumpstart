const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: 3000,
    stats: 'minimal',
    open: true
  },
  output: {
    sourceMapFilename: '[name].[hash].map'
  }
});
