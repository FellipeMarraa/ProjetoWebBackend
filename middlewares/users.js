const userModel = require('../models/users');

 async function cadastraUser(req, res, next){

    let insercaoBanco = await userModel.create(req.body);

    console.log(insercaoBanco);
}

 async function verificaUser(req, res, next){

    let verificacaoBanco = await userModel.get(req.body);

    console.log(verificacaoBanco);
}

module.exports = {cadastraUser, verificaUser}