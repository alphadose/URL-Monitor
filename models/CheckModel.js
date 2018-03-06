var model = require('./blobs.js');

async function check(id) {

	var status;

	status = await model.count({_id: id}, function (err, count){ 
			    	if(count>0){
			        	return true;
			    	}
			    	else{
			    		return false;
			    	}
				}); 

	return status;
}

module.exports = check;