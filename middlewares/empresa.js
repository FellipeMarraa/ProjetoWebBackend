const fs = require('fs')
const empresaModel = require('../models/empresa')
const serviceModel = require('../models/services')

async function postEmpresa(req, res, next){

    let insercaoBanco = await empresaModel.create(req.body);

    console.log("esse é o retorno da linha 8 do middleware");
    console.log(insercaoBanco);
    res.locals.data = insercaoBanco;
    next();
}

async function getEmpresa(req, res, next){
    try {
    let listarEmpresa = await empresaModel.find();
    let x = []
    for(let i = 0; i < listarEmpresa.length; i++){
        const teste = await serviceModel.findOne({"id":listarEmpresa[i]._id})
        fs.readFile(teste.imgURL, {encoding: 'base64'}, (err, data) => {
            x.push({
                "empresa":listarEmpresa[i],
                "imagem": data
            })
            console.log("a");
        })
    }
    console.log(x);
    res.status(200).send(x)

    }
    catch(error){
        console.log(error);
    }
}

module.exports = {postEmpresa, getEmpresa}
