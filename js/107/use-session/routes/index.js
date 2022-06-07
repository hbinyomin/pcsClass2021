var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express', partials: { content: 'index' } });
});

module.exports = router;
