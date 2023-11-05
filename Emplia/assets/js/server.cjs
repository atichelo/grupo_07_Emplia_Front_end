var cors_proxy = require('cors-anywhere');
var http = require('http');
var fs = require('fs');
var path = require('path');

// Define 'port' y 'host'
var port = 8081;  // Puedes cambiar esto por el puerto que prefieras
var host = 'localhost';  // Puedes cambiar esto por el host que prefieras

cors_proxy.createServer({
    originWhitelist: [], // Permite todos los orígenes
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

http.createServer(function (req, res) {
    console.log('request ', req.url);
    var filePath = '.' + req.url;
    if (filePath == './')
        filePath = './crear-cuenta.html';

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            res.end(); 
        }
        else {       
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });

}).listen(port);
console.log('Server running at http://' + host + ':' + port);
 