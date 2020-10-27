const fs = require('fs')

const serviceModel = require('../models/services')

async function postService(req, res, next){
    console.log(req.body)
    console.log(req.file)

    const teste = await  serviceModel.create({
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        subcategoria: [],
        imgURL: req.file.path
    })

    console.log(teste)
}

async function getService(req, res, next){
    console.log(req.params.serviceID);
    const teste = await serviceModel.findById(req.params.serviceID)
    console.log(teste);
    fs.readFile(teste.imgURL, {encoding: 'base64'}, (err, data) => {
        console.log(data);
        res.status(200).send({"file":data})
    })
}

module.exports = {postService, getService}
