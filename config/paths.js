const path = require('path');

const BASE = path.resolve(__dirname, '..');
const MODULES = path.join(BASE, 'node_modules');
const APP = path.join(BASE, 'src');

module.exports = {
  BASE,
  MODULES,
  APP,
  ASSETS: path.join(BASE, 'assets'),
  TEST: path.join(BASE, 'test')
};
