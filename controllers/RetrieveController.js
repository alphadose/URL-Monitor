const model = require('../models/RetrieveModel');

async function retrieve(req, res) {
	let data = await model(req.params.id);
	res.send(data);
}

module.exports = retrieve;