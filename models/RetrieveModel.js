var model = require('./Connection');
var check = require('./CheckModel');

async function retrieve_model(id=null) {
	var data, status;

	function handler(err, blobs) { 
	  if (err) {
          return err;
      } else {
          return blobs;
      }
	}

	if(id){
		status = await check(id);
		if (status)
			data = await model.findById(id, handler);
		else
			data = 'Blob Does Not Exist';
	}
	else
		data = await model.find({}, handler);

	return data;
}

module.exports = retrieve_model;

