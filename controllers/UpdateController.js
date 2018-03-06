var model = require('../models/UpdateModel');

async function update(req, res) {
    var id = req.params.id;
    var url = req.body.url;
    var method = req.body.method;
    var data = req.body.data;
    var headers = req.body.headers;
    var time = req.body.time;
    msg = await model(id, url, method, data, headers, time);
    res.send(msg);
}

module.exports = update;