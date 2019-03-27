const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const BASE_PATH = path.resolve(__dirname, '');
const BUILD_PATH = path.join(BASE_PATH, 'dist');

module.exports = merge(common, {
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  }
});
