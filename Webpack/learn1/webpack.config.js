  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const { CleanWebpackPlugin } = require('clean-webpack-plugin')

  module.exports = {
    // entry: './src/index.js', // 和下面一样的
    mode: 'development', //production: 压缩了、development: 不压缩
    // devtool: 'source-map', // 打印出错误文件地址 
    entry: {
        main: './src/index.js',
    },
    devServer: {
        contentBase: './release', //生产的地址吧。自动刷新
        open: true, //自动打开网页
        port: 1234,
        host: '0.0.0.0', //必须设置、本地有点问题
        proxy: {
            "/api": "http://localhost:3000"
        }
    },
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: {
                // loader: 'file-loader', // 愿文件 
                loader: 'url-loader', // data64 文件 
                options: {
                    name: 'icon_[name].[ext]', // 原名 ext为原始后缀
                    outputPath: 'images/', // 上面格式放到这里
                    limit: 20480, // 小于 x <= x/1024kb base64. >x则为文件格式
                }
            },
        },{
            test: /\.css$/,
            use: [
                'style-loader', 
                'css-loader', 
                'postcss-loader', //会自动添加浏览器兼容
            ],
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',    // 编译是先下到上、右到左
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2, //新引入的文件也会导入下面的两个文件
                        modules: true, // 适合scss模块化css
                    }
                },
                'sass-loader',    // scss脚手架
                'postcss-loader', //会自动添加浏览器兼容
            ],
        }]
    },
    output: {
        filename: 'bundle.js', // 生成文件
        path: path.resolve(__dirname, 'release') //__dirname当前配置文件的地址（拼接）路径
    },
     // plugin: 配置是在项目打包完成的前后进行配置的选项
    plugins: [
        new HtmlWebpackPlugin({
            //publicPath: 'https://github.com', // html中所以引入的文件加前缀
            template: 'src/index.html' // 自动生产html根据模版
        }),
        new CleanWebpackPlugin()
    ]
  }