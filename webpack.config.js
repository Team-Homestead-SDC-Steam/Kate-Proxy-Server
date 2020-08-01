const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
      title: 'Steam Item Details Page',
      scriptLoading: 'defer',
      links: [
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap'
      ],
      scripts: [
        '/vendor.bundle.js',
        '/bundle.js',
        {
          src: 'http://ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3001/vendor.bundle.js',
          defer: 'defer'
        },
        {
          src: 'http://ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3001/bundle.js',
          defer: 'defer'
        },
        // {
        //   src: 'http://ec2-54-185-79-51.us-west-2.compute.amazonaws.com:3002/bundle.js',
        //   defer: 'defer'
        // },
        {
          src: 'http://ec2-13-56-224-137.us-west-1.compute.amazonaws.com:3003/main.js',
          defer: 'defer'
        },
        {
          src: 'http://ec2-18-188-192-44.us-east-2.compute.amazonaws.com:3004/bundle.js',
          defer: 'defer'
        },
        {
          src: 'http://ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3005/bundle.js',
          defer: 'defer'
        },
        {
          src: 'http://ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3005/vendor.bundle.js',
          defer: 'defer'
        },
        // {
        //   src: 'http://ec2-54-185-79-51.us-west-2.compute.amazonaws.com:3006/bundle.js',
        //   defer: 'defer'
        // }
      ]
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/,
      compressionOptions: {
        level: 6
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    open: true,
    compress: true,
    proxy: {
      '/': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};
