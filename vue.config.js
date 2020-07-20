// 别名配置
module.exports = {
    configureWebpack: {
        resolve:{
            alias:{
                'assets':'@/assets',
                'components':'@/components',
                'common':'@/common',
                'content':'@/content',
                'store':'@/store',
                'api':'@/api',
                'views':'@/views',
            }
        }
    }
}