module.exports = {
  entry: './client/src/index',
  output: {
    path: 'client/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: __dirname + '/client/src',
      query: { presets: ['react','es2015'] }
    }]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  }
};
