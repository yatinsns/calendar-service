var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

var eventRouter = express.Router();
eventRouter.use(bodyParser.json());

eventRouter.route('/event/:eventId')
.all(function (req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  next();
})
.get(function (req, res, next) {
  var fileUrl = "/get_event.html";
  var filePath = path.resolve('./../public' + fileUrl);
  fs.exists(filePath, function(exists) {
    if (exists) {
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.end('<h1>Error 404: File not found</h1>');
    }
  });
})
.post(function (req, res, next) {
  var fileUrl = "/add_event.html";
  var filePath = path.resolve('./../public' + fileUrl);
  fs.exists(filePath, function(exists) {
    if (exists) {
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.end('<h1>Error 404: File not found</h1>');
    }
  });
})
.put(function (req, res, next) {
  var fileUrl = "/edit_event.html";
  var filePath = path.resolve('./../public' + fileUrl);
  fs.exists(filePath, function(exists) {
    if (exists) {
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.end('<h1>Error 404: File not found</h1>');
    }
  });
})
.delete(function (req, res, next) {
  res.end('Deleting the event: ' + req.params.eventId);
});

app.use('/app/app_id', eventRouter);

app.listen(port, hostname, function (){
  console.log('Server running...');
});
