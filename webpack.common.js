const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${paths.APP_PATH}/index.html`,
  filename: 'index.html',
  inject: 'body',
  favicon: `${paths.ASSETS_PATH}/images/favicon.ico`
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'styles.css'
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'assets/images', to: 'assets/images' }
]);

module.exports = {
  entry: {
    main: `${paths.APP_PATH}/index.js`
  },
  mode: 'development',
  plugins: [
    HtmlWebpackPluginConfig,
    MiniCssExtractPluginConfig,
    CopyWebpackPluginConfig
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: paths.MODULES_PATH,
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
  },
  resolve: {
    alias: {
      assets: paths.ASSETS_PATH,
      components: paths.COMPONENTS_PATH,
      pages: paths.PAGES_PATH,
      actions: paths.ACTIONS_PATH,
      test: paths.TEST_PATH
    },
    extensions: ['.js', '.json', '.jsx']
  }
};
