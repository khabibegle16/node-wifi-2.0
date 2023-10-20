var events = require('events');
var ping = require('ping');
var hosts = ['www.oracle.com'];
const windowsGetCurrentConnections = require('./windows-current-connections');
var connectionEvent = new events.EventEmitter();
const config = {
  debug: false,
  iface: null
};
//Fire the event connection status
let connectionStatus = false;
let connectionState = windowsGetCurrentConnections(config);
setInterval(async () => {
  ping.sys.probe(hosts[0], async function (isAlive) {
    // var msg = isAlive ? isAlive+'host ' + host + ' is alive' : 'host ' + host + ' is dead';
    console.log('isAlive=', isAlive);
    // if (connectionStatus !== isAlive) {
    //   connectionStatus = isAlive;
    connectionEvent.emit(
      'check_connection',
      JSON.stringify(await connectionState())
    );
    // windowsGetCurrentConnections(config, Data => {
    //   console.log(Data);
    // });
    // let d = await connectionState();
    // console.log(d);
    // windowsGetCurrentConnections(config, (error, currentConnections) => {
    //   if (error) {
    //     console.log(error);
    //     process.exit(2);
    //   } else {
    //     console.log(currentConnections);
    //     connectionEvent.emit('check_connection', {
    //       connectionStatus: connectionStatus,
    //       currentConnections: currentConnections
    //     });
    //   }
    // });
    // }
  });
}, 4000);

exports.connectionEvent = connectionEvent;
