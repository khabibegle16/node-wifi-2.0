require('dotenv').config();
const wifi = require('../src/wifi');
// const {connectionEvent} = require("./eventTest")


wifi.init({
  debug: true,
  iface: process.env.WIFI_IFACE
});

// const ap = {
//   ssid: '',
//   password: ""
// };

const ap = {
  ssid: '',
  password: ""
};


if (process.env.PROMISE == 'true') {
  console.log('with promise');
  wifi.connect(ap, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('connected');
    }
  });
} else {
  console.log('with callback');
  wifi
    .connect(ap)
    .then(() => {
      console.log('connected');
    })
    .catch(e => {
      console.log(e);
    });
}

wifi.connectionEvent.on("check_connection",(connectionStatus)=>{
  console.log("connectionStatus==",connectionStatus)
})