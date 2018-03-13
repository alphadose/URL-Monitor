const model = require('./Connection');

async function create_model(url, method, data, headers) {

  let msg, promise;

  promise = new Promise(function (resolve, reject){
                model.create({
                  url : url,
                  method : method,
                  data : data,
                  headers : headers || {}
                }, function (err, blob) {
                      if (err) {
                          reject("There was a problem adding the information to the database.\n" + err);
                      } else {
                          resolve(blob);
                      }
                });
      });

  msg = promise.then((blob) => {return blob;});
  return msg;
}

module.exports = create_model;