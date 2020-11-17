const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresaModel = new Schema({

        nomeEmpresa: {
            type: String,
            required: true
        },

        cnpjEmpresa: {
            type: String,
            required: true
        },

        servico: {
            type: String,
            required: true
        },

        valorServico: {
            type: String,
            required: true
        }

    },
    {_id: true, collection: 'empresas' }
);

module.exports = mongoose.model('empresas', empresaModel);
