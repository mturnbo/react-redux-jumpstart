const path = require('path');

const BASE = path.resolve(__dirname, '../');
const APP = path.join(BASE, 'src');
const ASSETS = path.join(BASE, 'assets');

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
			assets: ASSETS,
			components: path.join(APP, 'components'),
			pages:  path.join(APP, 'pages'),
      test: path.join(BASE, 'test')
		},
		extensions: ['.js', '.json', '.jsx']
	}
};
