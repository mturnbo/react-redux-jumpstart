const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BASE_PATH = path.resolve(__dirname, '../');
const APP_PATH = path.join(BASE_PATH, 'src');
const ASSETS_PATH = path.join(BASE_PATH, 'assets');

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
	filename: 'styles.css'
});

module.exports = {
  plugins: [
		MiniCssExtractPluginConfig
  ],
  module: {
    rules: [
			{
				test: /\.(c|sa|sc)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
    ],
  },
	resolve: {
		alias: {
			assets: ASSETS_PATH,
			components: path.join(APP_PATH, 'components')
		},
		extensions: ['.js', '.json', '.jsx']
	}
};
