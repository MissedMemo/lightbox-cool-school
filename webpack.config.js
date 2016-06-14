module.exports = {
  entry: './src/js/index',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: __dirname + '/src/js',
      query: { presets: ['react','es2015'] }
    }]
  },
  resolve: {
    extensions: [ '', '.js', 'jsx' ]
  }
};
