const path = require('path')
const HTMLPlugin = require('html-webpack-plugin'); //引入插件
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:{
        home:'./src/index.js',
        print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new CleanPlugin('dist'),
        new HTMLPlugin({
            title:'output Management'
        }),
    ],
    output: {
        filename:'[name].bundel.js',  //根据入口起点动态生成bundel名称
        path:path.resolve(__dirname,'dist')
    }
}