var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource again');
  res.render('users', { title: 'Users' });

});

module.exports = router;


