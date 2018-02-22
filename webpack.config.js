const path = require('path');

module.exports = {
  entry: './disorder.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'disorder.js'
  }
};