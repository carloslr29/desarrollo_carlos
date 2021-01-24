const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    'nombre': { type: String, required: false},
    'diametro': { type: String, required: false},
    'periodo_rotacion': { type: String, required: false},
    'periodo_orbital': { type: String, required: false},
    'gravedad': { type: String, required: false},
    'poblacion': { type: String, required: false},
    'clima': { type: String, required: false},
    'terreno': { type: String, required: false},
    'superficie_agua': {type:String, require: false},
    'residentes': { type: String, required: false},
    'peliculas': [{type:String, require: false}],
    'url': { type: String, required: false},
    'creacion': { type: String, required: false},
    'edicion': { type: String, required: false}


});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Planeta', schema, 'planetas');