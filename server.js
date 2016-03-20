var http = require('http');

var PORT = 8000;
var HOSTNAME = 'localhost';

var server = http.createServer(function (request, response) {
  console.log('New connection received');
  var setResponseError = function (statusCode, message) {
    response.writeHead(statusCode, {'Content-Type': 'text/plain'});
    response.end(message);
  };

  if (request.method == 'GET') {
    if (request.url == '/') {
      response.statusCode = 200;
      response.end('Welcome');
    } else {
      setResponseError(404, 'Resource not available. Try \'/\' only.');
    }
  } else {
    setResponseError(404, 'Error - Supported HTTP method: GET');
  }
});

server.listen(PORT, HOSTNAME, function () {
  console.log('Server running at ' + HOSTNAME + ':' + PORT + ' ...');
});
