var model = require('./Connection');
var mongoose = require('mongoose');

async function check(id) {

	var status;

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