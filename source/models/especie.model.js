const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    'nombre': { type: String, required: false},
    'clasificacion': { type: String, required: false},
    'designacion': { type: String, required: false},
    'altura_media': { type: String, required: false},
    'vida_promedio': { type: String, required: false},
    'ojo_colores': { type: String, required: false},
    'cabello_colores': { type: String, required: false},
    'piel_colores': { type: String, required: false},
    'idioma': {type:String, require: false},
    'casa_mundo': { type: String, required: false},
    'personas': [{type:String, require: false}],
    'peliculas': [{type:String, require: false}],
    'url': { type: String, required: false},
    'creacion': { type: String, required: false},
    'edicion': { type: String, required: false}


});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Especie', schema, 'especies');