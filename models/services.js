const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesModel = new Schema({

    descricao: {
        type: String,
        required: false
    },

    categoria: {
        type: String,
        required: false
    },

    imgURL: {
        type: String,
        required: false
    },

    id: {
        type: String,
        required: false
    }
},
    {_id: true, collection: 'services' } // nomeando a collection e dizendo que o id sera gerado automaticamente
);

module.exports = mongoose.model('services', servicesModel);
