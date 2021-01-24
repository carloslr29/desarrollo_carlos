const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    'nombre': { type: String, required: false},
    'modelo': { type: String, required: false},
    'navesEstelares_clase': { type: String, required: false},
    'fabricante': { type: String, required: false},
    'costo_en_creditos': { type: String, required: false},
    'longitud': { type: String, required: false},
    'tripulacion': { type: String, required: false},
    'pasajeros': { type: String, required: false},
    'velocidad_maxima_atmosfera': {type:String, require: false},
    'hiperimpulsor_calificacion': {type:String, require: false},
    'MGLT': {type:String, require: false},
    'carga_capacidad': {type:String, require: false},
    'consumibles': {type:String, require: false},
    'peliculas': [{type:String, require: false}],
    'pilotos': [{type:String, require: false}],
    'url': { type: String, required: false},
    'creacion': { type: String, required: false},
    'edicion': { type: String,required: false}


});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('NavesEstelares', schema, 'navesestelares');