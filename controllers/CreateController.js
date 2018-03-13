const model = require('../models/CreateModel');

async function create(req, res) {
    let url = req.body.url;
    let method = req.body.method;
    let data = req.body.data;
    let headers = req.body.headers;
    let msg = await model(url, method, data, headers);
    res.send(msg);
}

module.exports = create;