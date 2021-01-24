const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    'titulo': { type: String, required: false},
    'episodio_id': { type: Number, required: false},
    'apertura_rastreo': { type: String, required: false},
    'directo': { type: String, required: false},
    'productor': { type: String, required: false},
    'lanzamiento_fecha': { type: Date, required: false},
    'especies': [{type:String, require: false}],
    'navesEstelares': [{type:String, require: false}],
    'vehiculos': [{type:String, require: false}],
    'caracteres': [{type:String, require: false}],
    'planetas': [{type:String, require: false}],
    'url': { type: String, required: false},
    'creacion': { type: String, required: false},
    'edicion': { type: String,required: false}


});

schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Peliculas', schema, 'peliculas');