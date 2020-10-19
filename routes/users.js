var express = require('express');
var router = express.Router();

const middlewareUser = require('../middlewares/users');
/* GET users listing. */
router.get('/users',
    middlewareUser.verificaUser
);

router.post('/cadastro',
    middlewareUser.cadastraUser
);

module.exports = router;
