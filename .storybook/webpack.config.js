const path = require('path');

const BASE_PATH = path.resolve(__dirname, '../');
const APP_PATH = path.join(BASE_PATH, 'src');
const ASSETS_PATH = path.join(BASE_PATH, 'assets');

module.exports = {
  module: {
    rules: [
			{
				test: /\.(c|sa|sc)ss$/,
				use: [
					'style-loader',
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
