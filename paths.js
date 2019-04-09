const path = require('path');

const BASE_PATH = path.resolve(__dirname, '');
const MODULES_PATH = path.join(BASE_PATH, 'node_modules');
const APP_PATH = path.join(BASE_PATH, 'src');

module.exports = {
  BASE_PATH,
  MODULES_PATH,
  APP_PATH,
  ASSETS_PATH: path.join(BASE_PATH, 'assets'),
  COMPONENTS_PATH: path.join(APP_PATH, 'components'),
  PAGES_PATH: path.join(APP_PATH, 'pages'),
  ACTIONS_PATH: path.join(APP_PATH, 'actions'),
  TEST_PATH: path.join(BASE_PATH, 'test')
};
