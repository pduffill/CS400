var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('ps3');
});

module.exports = router;
