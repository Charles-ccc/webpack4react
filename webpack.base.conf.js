// path用来指定输出文件的地址
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    // filename用来指定输出文件的名称
    // [name]表示占位符，用文件的名称来命名
    filename: '[name].js',
    path: path.join(__dirname, '/dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: '../'
      //       }
      //     },
      //     'css-loader'
      //   ]
      // },
      {
        test: /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') }
          }
        ]
      },
      // {
      //   test: /\.js$/,
      //   use: 'babel-loader?cacheDirectory',
      //   // 排除文件，缩小命中范围
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, 'src')
      // },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}