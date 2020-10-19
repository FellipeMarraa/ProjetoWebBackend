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