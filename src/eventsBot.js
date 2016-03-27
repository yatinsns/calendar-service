var CreateEventsBot = function () {
  this.parseCommand = function (command, callback) {
    console.log('Parsing command : ' + JSON.stringify(command));
    if (command.match(/^add event$/i)) {
      callback(null, 'Please enter new event details');
    } else if (command.match(/^events$/i)) {
      callback(null, 'Will be listing all events');
    } else if (command.match(/^edit event$/i)) {
      callback(null, 'Will be editing event');
    } else if (command.match(/^delete event$/i)) {
      callback(null, 'Will be deleting event');
    } else {
      callback(new Error('Unknown message'));
    }
  };
};

module.exports = new CreateEventsBot();
