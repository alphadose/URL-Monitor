var model = require('./blobs.js');

async function retrieve_model(id=null) {
	var data;

	function handler(err, blobs) { 
	  if (err) {
          return err;
      } else {
      	  console.log(blobs);
          return blobs;
      }
	}

	if(id)
		data = await model.findById(id, handler);
	else
		data = await model.find({}, handler);

	return data;
}

module.exports = retrieve_model;

