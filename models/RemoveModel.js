var model = require('./Connection');
var check = require('./CheckModel');

async function remove_model(id) {

    let msg, status, promise;

    status = await check(id);

    if(status){
        promise = new Promise(function(resolve, reject) {
                    model.findByIdAndRemove(id, function (err) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve("Blob Deleted Successfully");
                        }
                    });
            });
        msg = promise.then((response) => {return response});
    }
    else
        msg = 'Blob Does Not Exist';

    return msg;
}

module.exports = remove_model;