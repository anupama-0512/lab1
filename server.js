const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Lab Assignment 1 - CMPE281 : App is working as expected!');
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('Server is successfully running');