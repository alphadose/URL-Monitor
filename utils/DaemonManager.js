const request = require('request'),
 	  retrieve = require('../models/RetrieveModel'),
 	  update = require('../models/UpdateModel');

async function DaemonManager() {
	let blobs = await retrieve();

	for(let i in blobs){
		StoreTime(blobs[i]);
	}
}

async function StoreTime(blob) {

	let options = { 
		url : blob.url,
		method : blob.method.toUpperCase() || "GET",
		headers : blob.headers || {},
		form : blob.data || {},
		timeout : 2000,
		time : true
	};

	request(options, function(err, response) {
		if(err) {
			console.log(err);
		}
		else {
	  		update(blob._id, null, null, null, null, response.elapsedTime);
  		}	
	});
}

module.exports = DaemonManager;