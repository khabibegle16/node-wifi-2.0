var events = require('events');
var ping = require('ping');
var hosts = ['www.oracle.com'];
var connectionEvent = new events.EventEmitter();

//Fire the event connection status
let connectionStatus = false;
setInterval(() => {
  ping.sys.probe(hosts[0], function (isAlive) {
    // var msg = isAlive ? isAlive+'host ' + host + ' is alive' : 'host ' + host + ' is dead';
    console.log('isAlive=', isAlive);
    if (connectionStatus !== isAlive) {
      connectionStatus = isAlive;
      connectionEvent.emit('check_connection', connectionStatus);
    }
  });
}, 2000);

exports.connectionEvent = connectionEvent;
