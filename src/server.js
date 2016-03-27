var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var eventsBot = require('./eventsBot');
var Message = require('./message');

var PORT = 8000;
var HOSTNAME = 'localhost';

var app = express();

var router = express.Router();
router.use(bodyParser.json());
router.route('/').post(function (request, response, next) {
  eventsBot.parseCommand(request.body.message, function (error, result) {
    if (error) {
      response.writeHead(200, {'Content-Type': 'application/json'});
      var message = new Message(error.message);
      response.end(JSON.stringify(message));
    } else {
      response.writeHead(200, {'Content-Type': 'application/json'});
      var message = new Message(result);
      response.end(JSON.stringify(message));
    }
  });
});

app.use(morgan('dev'));
app.use('/', router);

app.listen(PORT, HOSTNAME, function () {
  console.log('Server running at ' + HOSTNAME + ':' + PORT + ' ...');
});
