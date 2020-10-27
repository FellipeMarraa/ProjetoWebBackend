const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesModel = new Schema({

    descricao: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        required: true
    },

    subcategoria: [{
        descricao: {
            type: String,
            required: true
        },
        imgURL: {
            type: String,
            required: true
        }
    }],
    imgURL: {
        type: String,
        required: true
    }

},
    {_id: true, collection: 'services' } // nomeando a collection e dizendo que o id sera gerado automaticamente
);

module.exports = mongoose.model('services', servicesModel);
