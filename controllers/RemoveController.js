var model = require('../models/RemoveModel');

async function remove(req, res) {
    let msg = await model(req.params.id);
    res.send(msg);
}

module.exports = remove;