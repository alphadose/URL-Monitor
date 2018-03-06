var model = require('./blobs.js');

async function model_update(id, url, method, data) {

  var msg;

  msg = await model.findById(id, function (err, blob) {
                  blob.update({
                      url : url || blob.url,
                      method : method || blob.method,
                      data : data || blob.data
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

module.exports = model_update;