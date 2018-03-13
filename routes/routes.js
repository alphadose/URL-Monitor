const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      retrieve = require('../controllers/RetrieveController'),
      create = require('../controllers/CreateController'),
      update = require('../controllers/UpdateController'),
      remove = require('../controllers/RemoveController');

router.use(methodOverride(function(req, res) {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method;
        delete req.body._method;

return method;
      }
}));

router.route('/').get(retrieve).
post(create);

router.route('/:id').get(retrieve);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;
