const userModel = require('../models/users');

async function cadastraUser(req, res, next){

    let insercaoBanco = await userModel.create(req.body);

    console.log(insercaoBanco);
    next();
}

async function verificaUser(req, res, next){

    const routeChange = (name) => {
        let path = '/'.concat(name);
        history.push(path);
    }

    let listarUsers = await userModel.find();
    req.body = listarUsers;
    next();

    console.log(verificaUser);
}

async function loginUser(req, res, next) {
    console.log(req.body)
    const login = req.body.login;
    const senha = req.body.senha;

    let user = await userModel.find({login: login});
    console.log("retorno do banco", user)
    let load = {autorization: false, user: user.tipo};


    try{
        if(user[0].senha === senha){
            load.autorization = true;
            load.user = user[0].tipo;
        }
    }catch(e){
        console.log("erro", e)
    }

    req.body = load;
    console.log(req.body);
    next();
}

module.exports = {cadastraUser, verificaUser, loginUser}
