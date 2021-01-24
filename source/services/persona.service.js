const db = require('../config/db');
const Persona = db.Persona;

module.exports = {
    getPersona, insertarPersona, getPersonaId
}

async function getPersona(){
    const oPersona = await Persona.find({}).lean();
    return oPersona
}

async function getPersonaId(id){
    const idPersona = id
    const oPersona = await Persona.findOne({id: idPersona}).lean();

    if(oPersona == undefined || oPersona == null){
        return {
            error: true,
            message: "id de persona no existe"
        }
    }

    return oPersona
}

async function insertarPersona(bodyPersona){
    const oPersona = new Persona(bodyPersona);
    return await oPersona.save();
}