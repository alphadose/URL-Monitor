var model = require('./blobs.js');

async function create_model(url, method, data) {

  var msg;

  msg = await model.create({
                  url : url,
                  method : method,
                  data : data
                }, function (err, blob) {
                      if (err) {
                          return "There was a problem adding the information to the database.\n" + err;
                      } else {
                          console.log('POST creating new blob: ' + blob);
                          return blob;
                      }
                });

  return msg;
}

module.exports = create_model;