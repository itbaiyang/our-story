const webpack = require('webpack');

module.exports = {
  entry: {
    application: __dirname + '/src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      loader: 'babel-loader'
    },{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
      loader: 'url-loader?limit=8192&name=[name].[ext]'
    },
    {
      test: /\.(jpe?g|png|gif|svg)\??.*$/,
      loader: 'url-loader?limit=8192&name=[name].[ext]'
    },
    {
      test: /\.styl(us)?$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'stylus-loader'
      ]
    },{
      test: /\.css$/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            // enable CSS Modules
            modules: true,
            // customize generated class names
            localIdentName: '[local]_[hash:base64:8]'
          }
        }
      ]
    }]
  },
}