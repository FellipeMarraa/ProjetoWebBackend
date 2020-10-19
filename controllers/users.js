function cadastraUser(req, res, next){
    res.status(200).send(req.body);
}

function verificaUser(req, res, next){
    res.status(200).send(req.body);
}


function loginUser(req, res, next){
    res.status(200).send(req.body);
}

module.exports = {cadastraUser, verificaUser, loginUser}
