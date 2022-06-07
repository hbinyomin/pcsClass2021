var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bar', function (req, res, next) {
  res.render('index', { title: 'BAR' });
});

router.get('/joe', function (req, res, next) {
  res.render('index', { title: 'JOE' });
});

module.exports = router;
