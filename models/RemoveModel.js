var model = require('./blobs.js');

async function remove_model(id) {

    var msg;

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

module.exports = remove_model;