var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var eventsBot = require('./eventsBot');

var PORT = 8000;
var HOSTNAME = 'localhost';

var app = express();

var router = express.Router();
router.use(bodyParser.json());
router.route('/').post(function (request, response, next) {
  eventsBot.parseCommand(request.body.message, function (error, result) {
    if (error) {
      reponse.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Unknown message')
    } else {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(result);
    }
  });
});

app.use(morgan('dev'));
app.use('/', router);

app.listen(PORT, HOSTNAME, function () {
  console.log('Server running at ' + HOSTNAME + ':' + PORT + ' ...');
});
