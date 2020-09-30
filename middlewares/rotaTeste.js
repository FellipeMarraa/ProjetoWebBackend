

function processaCalculo(req, res, next){
    console.log("Caiu no middleware");
    let calculo = 2+2;
    req.body["calculo"] = calculo;
    next();
}

module.exports = {processaCalculo}