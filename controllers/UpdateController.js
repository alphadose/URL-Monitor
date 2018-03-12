var model = require('../models/UpdateModel');

async function update(req, res) {
    let id = req.params.id;
    let url = req.body.url;
    let method = req.body.method;
    let data = req.body.data;
    let headers = req.body.headers;
    let time = req.body.time;
    let msg = await model(id, url, method, data, headers, time);
    res.send(msg);
}

module.exports = update;