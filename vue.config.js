module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target: "http://192.168.1.54:8080",//http://192.168.1.100:8080
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}