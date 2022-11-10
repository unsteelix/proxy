var http = require('http')

var httpProxy = require('http-proxy');
 
var proxy = httpProxy.createProxyServer(); 

http.createServer(function(req, res) {
    proxy.web(req, res, { 
        changeOrigin: true,
        target: 'https://gamemag.ru/' 
    });
}).listen(8008);

proxy.on('error', function(e) {
  console.log(e)
});