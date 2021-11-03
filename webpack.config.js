/*
 * @Author: your name
 * @Date: 2021-11-03 14:05:40
 * @LastEditTime: 2021-11-03 14:36:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \webpack-demo\webpack.config.js
 */
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production'
}