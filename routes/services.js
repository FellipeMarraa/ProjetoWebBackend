var multer = require("multer");
var express = require('express');
var router = express.Router();

const servicesMid = require('../middlewares/services')

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, '/home/fellipemarra/Dev/Faculdade/ProjetoWeb/src/assets/serverData/services')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});

var upload = multer({storage:storage})
router.post('/',
    upload.single('image'),
    servicesMid.postService
)

router.get('/:serviceID',

    servicesMid.postService
)

module.exports = router;