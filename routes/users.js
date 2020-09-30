var express = require('express');
var router = express.Router();

const middlewareUser = require('../middlewares/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/cadastro',
    middlewareUser.cadastraUser
);
module.exports = router;
