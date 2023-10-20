const wifi = require('./wifi');
wifi.init({
  iface: null
});

wifi.connectionEvent.on('check_connection', connectionStatus => {
  console.log('connectionStatus==', connectionStatus);
  //   ipcRenderer.send(CONNECTION_STATUS, connectionStatus);
});
