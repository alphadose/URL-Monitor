var model = require('./blobs.js');
var check = require('./CheckModel');

async function remove_model(id) {

    var msg, status;

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
        return msg;
    }
    else
        return 'Blob Does Not Exist';
}

module.exports = remove_model;