var mongoose = require('mongoose'),
	config = require('../config.json');

mongoose.connect('mongodb://localhost/' + config.database);

var blobSchema = new mongoose.Schema({  
  url: String,
  data: { type: Object, default: {} },
  headers: { type: Object, default: {} },
  responses: { type: [Number], default: [] },
  method: { type: String, default: 'get' }
});

var model = mongoose.model(config.collection, blobSchema);

module.exports = mongoose.model(config.collection);
