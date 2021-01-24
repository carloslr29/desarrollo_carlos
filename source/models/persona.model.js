const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    'id': {type: Number, required: false},
    'nombre': { type: String, required: false},
    'anio_nacimiento': { type: String, required: false},
    'ojo_color': { type: String, required: false},
    'genero': { type: String, required: false},
    'cabello_color': { type: String, required: false},
    'altura': { type: String, required: false},
    'masa': { type: String, required: false},
    'piel_color': { type: String, required: false},
    'casa_mundo': { type: String, required: false},
    'peliculas': [{type:String, require: false}],
    'especies': [{type:String, require: false}],
    'navesEstelares': [{type:String, require: false}],
    'vehiculos': [{type:String, require: false}],
    'url': { type: String, required: false},
    'creacion': { type: String, required: false},
    'edicion': { type: String, required: false}


});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Persona', schema, 'personas');