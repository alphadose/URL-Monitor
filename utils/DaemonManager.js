var request = require('request');
var retrieve = require('../models/RetrieveModel');
var update = require('../models/UpdateModel');

async function DaemonManager() {
	var blobs = await retrieve();

	if(blobs.length > 0)
		for(var i in blobs){
			StoreTime(blobs[i]);
		}
}

async function StoreTime(blob) {

	var options = { 
		url : blob.url,
		method : blob.method.toUpperCase() || "GET",
		headers : blob.headers || {},
		form : blob.data || {},
		timeout : 2000,
		time : true
	};

	console.log(options);

	request(options, function(err, response) {
		if(err) {
			console.log(err);
		}
		else {
	  		console.log('Request time in ms ' + response.elapsedTime);
	  		update(blob.id, null, null, null, null, response.elapsedTime);
  		}	
	});
}

module.exports = DaemonManager;