var model = require('../models/UpdateModel');

async function update(req, res) {
    var id = req.params.id;
    var url = req.body.url;
    var method = req.body.method;
    var data = req.body.data;
    msg = await model(id, url, method, data);
    res.send(msg);
}

module.exports = update;