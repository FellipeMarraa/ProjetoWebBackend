function postEmpresa(req, res, next){
    res.status(200).send(res.locals.data);
}

function getEmpresa(req, res, next){
    res.status(200).send(req.body);
}

module.exports = {postEmpresa, getEmpresa}
