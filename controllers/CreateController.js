var model = require('../models/CreateModel');

async function create(req, res) {
    var url = req.body.url;
    var method = req.body.method;
    var data = req.body.data;
    msg = await model(url, method, data);
    console.log("Why\n"+msg);
    res.send(msg);
}

module.exports = create;