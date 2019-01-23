const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BASE_PATH = path.resolve(__dirname, '');
const MODULES_PATH = path.join(BASE_PATH, 'node_modules');
const APP_PATH = path.join(BASE_PATH, 'src');
const ASSETS_PATH = path.join(BASE_PATH, 'assets');
const BUILD_PATH = path.join(BASE_PATH, 'dist');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${APP_PATH}/index.html`,
	filename: 'index.html',
	inject: 'body',
	favicon: `${ASSETS_PATH}/images/favicon.ico`
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
	filename: 'styles.css'
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

module.exports = {
	entry: {
		main: `${APP_PATH}/index.js`
	},
	plugins: [
		HtmlWebpackPluginConfig,
		MiniCssExtractPluginConfig,
		CleanWebpackPluginConfig
	],
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: MODULES_PATH,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(c|sa|sc)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
};
