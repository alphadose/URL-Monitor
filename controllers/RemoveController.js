var model = require('../models/RemoveModel');

async function remove(req, res) {
    msg = await model(req.id);
    res.send(msg);
}

module.exports = remove;