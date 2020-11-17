const fs = require('fs')
const empresaModel = require('../models/empresa')

async function postEmpresa(req, res, next){

    let insercaoBanco = await empresaModel.create(req.body);

    console.log(insercaoBanco);
    next();
}

async function getEmpresa(req, res, next){

    let listarEmpresa = await empresaModel.find();
    req.body = listarEmpresa;
    next();

    console.log(getEmpresa);
}

module.exports = {postEmpresa, getEmpresa}
