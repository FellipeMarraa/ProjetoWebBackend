const userModel = require('../models/users');

async function cadastraUser(req, res, next){

    let insercaoBanco = await userModel.create(req.body);

    console.log(insercaoBanco);
    next();
}

async function verificaUser(req, res, next){

    let listarUsers = await userModel.find();
    req.body = listarUsers;
    next();

    console.log(verificacaoBanco);
}

async function loginUser(req, res, next) {

    const login = req.body.login;
    const password = req.body.password;

    let user = await userModel.find({login: login});
    let load = {autorization: false};

    try{
        if(user[0].senha === password){
            load.autorization = true;
        }
    }catch(e){
        console.log("erro")
    }

    req.body = load;
    console.log(req.body);
    next();
}

module.exports = {cadastraUser, verificaUser, loginUser}