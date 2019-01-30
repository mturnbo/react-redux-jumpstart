const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const Visualizer = require('webpack-visualizer-plugin');

const BASE_PATH = path.resolve(__dirname, '');
const BUILD_PATH = path.join(BASE_PATH, 'dist');

module.exports = merge(common, {
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	plugins: [
		new Visualizer({ filename: './statistics.html' })
	],
});
