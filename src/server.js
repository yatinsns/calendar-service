var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var eventsBot = require('./eventsBot');
var message = require('./message');

var PORT = 8000;
var HOSTNAME = 'localhost';

var app = express();

var router = express.Router();
router.use(bodyParser.json());
router.route('/').post(function (request, response, next) {
  eventsBot.parseCommand(request.body.message, function (error, result) {
    var new_message;
    if (error) {
      response.writeHead(200, {'Content-Type': 'application/json'});
      new_message = message.create_message(error.message);
    } else {
      response.writeHead(200, {'Content-Type': 'application/json'});
      new_message = message.create_message(result.text, result.type, result.title, result.source);
    }
    response.end(JSON.stringify(new_message));
  });
});

app.use(morgan('dev'));
app.use('/', router);

app.listen(PORT, HOSTNAME, function () {
  console.log('Server running at ' + HOSTNAME + ':' + PORT + ' ...');
});
