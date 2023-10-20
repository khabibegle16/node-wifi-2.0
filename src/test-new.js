(async () => {
  var events = require('events');
  var ping = require('ping');
  var hosts = ['www.oracle.com'];
  const windowsGetCurrentConnections = require('./windows-current-connections');
  var connectionEvent = new events.EventEmitter();
  const config = {
    debug: false,
    iface: null
  };
  let connectionState = windowsGetCurrentConnections(config);
  //Fire the event connection status
  let connectionStatus = false;

  let d = await connectionState();
  console.log(d);
})();
