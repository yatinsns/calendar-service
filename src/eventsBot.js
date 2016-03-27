var CreateEventsBot = function () {
  this.extractEventId = function(command, format, callback) {
    var id = command.match(format)[1];
    if (id.split(' ').length == 1) {
      callback(null, id);
    } else {	
      callback(new Error('Multiple event ids'));
    } 
  },
  this.parseCommand = function (command, callback) {
    console.log('Parsing command : ' + JSON.stringify(command));
    if (command.match(/^add event$/i)) {
      callback(null, 'Please enter new event details');
    } else if (command.match(/^events$/i)) {
      callback(null, 'Will be listing all events');
    } else if (command.match(/^edit event (.*)/i)) {
      this.extractEventId(command, /^edit event (.*)/i, function (error, id) {
	if (error) {
	  callback(new Error('id not found'));
	} else {
	  callback(null, 'Will be editing event with id: ' + id);
	}
      });
    } else if (command.match(/^delete event (.*)/i)) {
      this.extractEventId(command, /^delete event (.*)/i, function (error, id) {
	if (error) {
	  callback(new Error('id not found'));
	} else {
	  callback(null, 'Will be deleting event with id: ' + id);
	}
      });
    } else {
      callback(new Error('Unknown message'));
    }
  };
};

module.exports = new CreateEventsBot();
