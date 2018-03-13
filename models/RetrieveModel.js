var model = require('./Connection');
var check = require('./CheckModel');
var takeRight = require('lodash.takeright');
var percentile = require('../utils/Percentile');

async function retrieve_model(id=null) {
	let data, status, promise;

	if(id){
		status = await check(id);
		if (status) {
			promise = new Promise(function (resolve, reject){
						model.findById(id)
						.lean()
						.exec(function (err, blobs) { 
							  if (err) {
							      reject(err);
							  } else {
							      resolve(blobs);
							  }
							});
						});
			data = promise.then((blob) => {return blob});
			indices = [0.5, 0.75, 0.95, 0.99];
			for(let i in indices)
				data[indices[i]*100+"th_Percentile"] = percentile(data.responses, indices[i]);
			data.responses = takeRight(data.responses, 100);
		}
		else
			data = 'Blob Does Not Exist';
	}
	else {
			promise = new Promise(function (resolve, reject){
							model.find({})
							.lean()
							.exec(function (err, blobs) { 
								  if (err) {
								      reject(err);
								  } else {
								      resolve(blobs);
								  }
								});
							});
			data = promise.then((blob) => {return blob});
	}

	return data;
}

module.exports = retrieve_model;

