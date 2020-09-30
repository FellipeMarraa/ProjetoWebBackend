const userModel = require('../models/users');

 async function cadastraUser(req, res, next){

    let insercaoBanco = await userModel.create(req.body);

    console.log(insercaoBanco);
}

module.exports = {cadastraUser}