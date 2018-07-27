// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var SerialPort = require('serialport');
//"/dev/ttyS0" is a name of serial port GPIO14 and GPIO15 for RASPI Zero W, and the baudrate is 9600
//var port = new SerialPort('/dev/ttyUSB0', function (err) { baudRate: 19200 });

// File operation
// var fs = require('fs');

// Serial port settings
var port = new SerialPort('/dev/ttyAMA0', { //Can use /dev/ttyUSB0-/dev/ttyUSB3, /dev/ttyS0 
  baudRate: 19200,  //9600
  dataBits: 8,
  parity: 'odd',    //none
  stopBits: 1,
  rtscts: false,
  xon: false,
  xoff: false,
  flowControl: false
});


//will be executed if there is an error in the serial communication
port.on('error', function (err) {
   console.error("error", err);
});

//will be executed if port is opened
port.on('open', function () {
  console.log('port opened...');
});

//will be executed if there is a serial data on a stream (receiving serial data)
var data_='';
port.on('data', function (data) {
  console.log(data.toString());
  data_=data_+data;
  if (data == '\n'){
    document.getElementById('ports').innerHTML =data.toString();
    data_='';
  }
  // fs.appendFile('serial_data.txt', data.toString(), function(err){
  //   if(err) throw err;
  //   // console.log('saved');
  // })
});