const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use("/miaov",proxy({
        target:"https://data.miaov.com/",
        secure: false, //是否启用ssl证书检验
        changeOrigin: true,
        pathRewrite: {
            "^/miaov":""
        },
        cookieDomainRewrite:"https://data.miaov.com/"
    }));
};