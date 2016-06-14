module.exports = {
  entry: './client/src/js/index',
  output: {
    path: 'client/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: __dirname + '/client/src/js',
      query: { presets: ['react','es2015'] }
    }]
  },
  resolve: {
    extensions: [ '', '.js', 'jsx' ]
  }
};
