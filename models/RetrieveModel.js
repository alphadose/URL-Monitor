var model = require('./Connection');
var check = require('./CheckModel');
var takeRight = require('lodash.takeright');
var percentile = require('../utils/Percentile');

async function retrieve_model(id=null) {
	let data, status;

	function handler(err, blobs) { 
	  if (err) {
          return err;
      } else {
          return blobs;
      }
	}

	if(id){
		status = await check(id);
		if (status) {
			data = await model.findById(id, handler);
			data = data.toObject();
			indices = [0.5, 0.75, 0.95, 0.99];
			for(let i in indices)
				data[indices[i]*100+"th_Percentile"] = percentile(data.responses, indices[i]);
			data.responses = takeRight(data.responses, 100);
		}
		else
			data = 'Blob Does Not Exist';
	}
	else
		data = await model.find({}, handler);

	return data;
}

module.exports = retrieve_model;

