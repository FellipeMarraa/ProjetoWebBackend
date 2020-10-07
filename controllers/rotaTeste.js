function resProcessaCalculo(re,res,next){
    console.log("Caiu no controller");
    res.status(200).send({"respostaCalculo":req.body.calculo})

}

module.exports = {resProcessaCalculo}