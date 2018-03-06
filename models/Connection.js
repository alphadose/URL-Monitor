var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/new');

var blobSchema = new mongoose.Schema({  
  url: String,
  data: { type: Object, default: {} },
  headers: { type: Object, default: {} },
  responses: { type: [Number], default: [] },
  method: { type: String, default: 'get' }
});

var model = mongoose.model('Blob', blobSchema);

module.exports = mongoose.model('Blob');
