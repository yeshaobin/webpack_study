const path = require('path')
module.exports ={
  //入口文件
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    // 输出路径目录 绝对路径
    path:path.resolve(__dirname,'dist')
  },
  //设置模式 produtction or development 
  mode:'development'
}