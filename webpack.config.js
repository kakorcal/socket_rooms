module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './'
  },
  entry: './client/javascripts/app.js',
  output: {
    path: './client/javascripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /js?$/,
        exclude: /node_modules/
      }
    ]
  }
};