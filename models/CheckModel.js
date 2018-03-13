const model = require('./Connection'),
 	  mongoose = require('mongoose');

async function check(id) {

	let status;

	if(mongoose.Types.ObjectId.isValid(id)) {
		status = await model.count({_id: id}, function (err, count){ 
				    	if(count>0){
				        	return true;
				    	}
				    	else{
				    		return false;
				    	}
					}); 
	}
	else
		status = false;

	return status;
}

module.exports = check;