const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

console.log(__dirname);

module.exports = merge(baseConfig, {
  mode: 'production'
})