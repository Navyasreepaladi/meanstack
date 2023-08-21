var http = require('http');
var dt = require('./first_module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDatetime());
  res.end('This is current time navya!');
}).listen(8080);