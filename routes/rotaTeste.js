var express = require('express');
var router = express.Router();

router.post("/", function (req, res, next){
    console.log('Foi enviado um request com o seguinte conteudo', req.body);
    res.status(200).send({"Message": "Voce enviou dados para o servidor"})
})


module.exports = router;