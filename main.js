"use strict"
const app = require('express')();
const smartcard = require('smartcard');
const thaiCommand = require('./src/thai_id');
app.use((req, res, next) => {

})

let devices = new smartcard.Devices();
let smreader;

devices.onActivated().then(a => {
	smreader = devices.listDevices()[0];
	smreader.on('card-inserted', (data) => {
		console.log('Card inserted:', data);
		let card = data.card
		let select = thaiCommand.enableCardCommand(card);
		select.then(buf => {
			thaiCommand.getGender(card).then(ename => {
				console.log('dob:', ename)
			}).catch(e => {

			})
		}).catch(e => {
			console.log(e);
		})

	})
}).catch(e => {})