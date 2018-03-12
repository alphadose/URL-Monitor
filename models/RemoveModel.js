var model = require('./Connection');
var check = require('./CheckModel');

async function remove_model(id) {

    let msg, status;

    status = await check(id);

    if(status){
        msg = await model.findById(id, function (err, blob) {
                    if (err) {
                        return err;
                    } else {
                        blob.remove(function (err, blob) {
                            if (err) {
                                return err;
                            } else {
                                console.log('DELETE removing ID: ' + blob._id);
                                return blob;
                            }
                        });
                    }
                });
    }
    else
        msg = 'Blob Does Not Exist';

    return msg;
}

module.exports = remove_model;