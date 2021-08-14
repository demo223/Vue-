// path模块处理文件路径及目录路径的一个nodejs内置模块
const path = require("path")

// 导入html-webpack-plugin插件
const HtmlPlugin = require("html-webpack-plugin")
// 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  // 要复制的文件
  template: 'src/index.html', /* 指定原文件的存放路径 */
  //指定复制的文件名和存放路径
  filename: './index.html'
})

// 导入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  /*  // 在开发阶段建议把devtool设置为eval-source-map
   devtool:'eval-source-map', */
  // 实际发布的时候，建议把devtool设置为"nosources-source-map"
  devtool: 'nosources-source-map',
  mode: "development",
  /* mode有development和production两个值可选 */
  /* 开发的时候使用development，这里追求的是速度而不是体积 */
  /* 项目发布实现的时候使用production，上线追求的是体积 */
  entry: path.join(__dirname, './src/test1.js'), /* 打包入口文件的路径 */
  output: {
    // path生成的文件的目录名称
    path: path.join(__dirname, 'dist'),
    //fliename指定生成的文件名
    filename: 'js/bundle.js'
  },
  // 插件数组，webpack会加载数组中的这些插件
  plugins: [htmlPlugin, new CleanWebpackPlugin(),],
  devServer: {
    // 首次打包成功后，自动打开浏览器
    open: true,
    // 指定端口号，如果是80端口，可以省略
    port: 80,
    // 指定运行的主机地址 
    host: '127.0.0.1'
  },
  module: {
    rules: [
      /* 定义不同的模块对应的loader */
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      /* 处理.less文件的loader */
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      /* 处理图片的loader */
      // limit指定图片的大小 <= limit大小的图片才会转换为base64
      { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=images' },
      /* 使用babel-loader处理高级的js语法 */
      // 必须使用exclude指定排除项，因为node_modules目录下的第三方包不需要被打包
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
