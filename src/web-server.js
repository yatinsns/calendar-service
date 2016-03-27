var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.set('view engine', 'ejs');

app.use(morgan('dev'));

var eventRouter = express.Router();
eventRouter.use(bodyParser.json());

eventRouter.route('/app/:appId/event/:eventId/show')
.get(function (req, res, next) {
  res.render('get_event', {
    title: "event-title",
    description: "event-description",
    date: "12/12/2016",
    start: "12:00PM",
    end: "1:00PM"
  });
});

eventRouter.route('/app/:appId/event/:eventId/add')
.get(function (req, res, next) {
  res.render('add_event');
});

eventRouter.route('/app/:appId/event/:eventId/edit')
.get(function (req, res, next) {
  res.render('edit_event', {
    title: "event-title",
    description: "event-description",
    date: "12/12/2016",
    start: "12:00PM",
    end: "1:00PM"
  });
});

app.use('/', eventRouter);

app.listen(port, hostname, function (){
  console.log('Server running...');
});
