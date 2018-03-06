var model = require('../models/RetrieveModel');

async function retrieve(req, res) {
	data = await model(req.id);
	res.send(data);
}

module.exports = retrieve;