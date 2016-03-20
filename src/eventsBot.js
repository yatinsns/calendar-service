var CreateEventsBot = function () {
  this.parseCommand = function (command, callback) {
    console.log('Parsing command : ' + command);
    callback(null, 'Done');
  };
};

module.exports = new CreateEventsBot();
