var model = require('./Connection');
var check = require('./CheckModel');

async function model_update(id, url, method, data, headers, time) {

  let msg, status;

  status = await check(id);

  if(status) {
      msg = await model.findById(id, function (err, blob) {
                      if(time) blob.responses.push(time);
                      blob.update({
                          url : url || blob.url,
                          method : method || blob.method,
                          data : data || blob.data,
                          headers : headers || blob.headers,
                          responses : blob.responses
                      }, function (err, blobID) {
                        if (err) {
                            return "There was a problem updating the information to the database: " + err;
                        } 
                        else {	
                    		  blob["success"] = true;
                            return blob;
                         }
                      })
                  });

      return msg;
  }
  else
    return 'Blob Does Not Exist';
}

module.exports = model_update;