module.exports = {
  output: {
    filename: 'bundle.js',
    path: __dirname+'/client'
  },
  module: {
    loaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}]
  },
  entry: './client/index.js'
}