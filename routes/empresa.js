var express = require('express');
var router = express.Router();

const middlewareEmpresa = require('../middlewares/empresa');
const empresaController = require('../controllers/empresa');
const multer = require("multer");


/* GET users listing. */
router.get('/',
    middlewareEmpresa.getEmpresa,
    empresaController.getEmpresa
);

router.post('/cadastroempresa',
    middlewareEmpresa.postEmpresa,
    empresaController.postEmpresa
);


// var storage = multer.diskStorage({
//
//
//     destination: function (req, file, cb){
//
//         cb(null, '/home/alex/Dev/Faculdade/ProjetoWeb/src/assets/serverData/empresa')
//     },
//     filename: function(req, file, cb){
//         cb(null, file.originalname)
//     }
// });


module.exports = router;

