# miftahf77@gmail.com
# electron-serialport
# 27 July 2018

Tutorial at :
https://blog.marekkraus.sk/linux/how-to-make-electron-run-on-raspberry-pi/
https://github.com/johnny-five-io/electron-serialport/blob/master/package.json
https://www.npmjs.com/package/electron-packager

How to use :
1. clone this repo to Raspi 3 (Raspi 3 is using Raspbian jessie desktop GUI).
	Don't forget to install git : 
	"sudo apt-get install git"
2. Install node js:
	"sudo apt-get update"
	"sudo apt-get dist-upgrade"
	"curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -""
	"sudo apt-get install -y nodejs"
2. Install electron :
	"sudo npm install -g electron --unsafe-perm=true --allow-root"
3. Install electron-packager
	"npm install electron-packager --save-dev"
4. goto the "electron-serialport" directory, and run :
	"npm install"
5. run this : "electron-builder ."
6. goto "electron-serialport-linux-armv7|" directory
7. execute "electron-serialport"
8. Trying to send serial data to ttyAMA0 serial port raspi