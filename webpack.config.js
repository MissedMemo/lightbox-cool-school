var webpack = require('webpack');

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
      include: __dirname + '/client/src'
    }]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // = faster redux & silence console warnings!
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      // = silence 3rd party unreachable code etc. warnings for webpack -p
      compress: { warnings: false }
    })
  ]
};
