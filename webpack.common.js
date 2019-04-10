const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${paths.APP}/index.html`,
  filename: 'index.html',
  inject: 'body',
  favicon: `${paths.ASSETS}/images/favicon.ico`
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'styles.css'
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'assets/images', to: 'assets/images' }
]);

module.exports = {
  entry: {
    main: `${paths.APP}/index.js`
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
        exclude: paths.MODULES,
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
      config: paths.CONFIG,
      assets: paths.ASSETS,
      components: paths.COMPONENTS,
      pages: paths.PAGES,
      actions: paths.ACTIONS,
      test: paths.TEST
    },
    extensions: ['.js', '.json', '.jsx']
  }
};
