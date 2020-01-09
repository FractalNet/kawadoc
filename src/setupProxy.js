const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { 
        target: 'http://39.99.163.236:1323',
        secure: false,
        changeOrigin: true,
    }))
    app.use(proxy('/x/api', {
        target: 'http://127.0.0.1:1325'
    }))
};