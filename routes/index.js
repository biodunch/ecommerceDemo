var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wisov Optika Demo' });
});

router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Wisov Optika Demo' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Wisov Optika Demo' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Wisov Optika Demo' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Wisov Optika Demo' });
});

module.exports = router;
