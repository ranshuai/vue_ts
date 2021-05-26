const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    alias: {
        '@': resolve('src'),
    }
  },
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
        }
      },
      {
        test: /\.tsx?$/, loader: "ts-loader", 
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // 热更新
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',  
        favicon: resolve('favicon.ico'),
        inject: true
      }),
    new VueLoaderPlugin()
  ]
};