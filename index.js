let proxy = require('express-http-proxy')
var express = require("express");
var app = express();

app.use('/', proxy('http://picola2.unsteelix.keenetic.link/'))
//app.listen(8008);
module.exports = app;


// var http = require('http')

// var httpProxy = require('http-proxy');
 
// var proxy = httpProxy.createProxyServer(); 

// http.createServer(function(req, res) {
//     proxy.web(req, res, { 
//         changeOrigin: true,
//         target: 'https://blog.unsteelix.keenetic.link/' 
//     });
// }).listen(8008);

// proxy.on('error', function(e) {
//   console.log(e)
// });