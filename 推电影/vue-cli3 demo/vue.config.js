module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.m.naoffer.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: false,
    
}