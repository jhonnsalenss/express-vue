var express = require('express');
var router = express.Router();

var app = express();


/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('Express RESTful API desde /test');
  res.json({
    item: 120,
    title: 'Titulo json desde expres path /test',
    description: 'Descripcion json desde express path /test'
  });
});

module.exports = router;
