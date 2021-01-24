const fetch = require('node-fetch');
const personService = require('../services/persona.service');

exports.getPersona = async function(req, res, next){
    personService.getPersona()
    .then(resp =>{
        return res.json(resp)
    })
    .catch(err =>{
        console.log("error: " + err.message);
        return res.status(500).json({
            error: true,
            message: err.message
        })
    });
}

exports.getPersonaId = async function(req, res, next){
    const idPersona = req.params.idPersona;

    personService.getPersonaId(idPersona)
    .then(resp =>{
        return res.json(resp)
    })
    .catch(err =>{
        console.log("error: " + err.message);
        return res.status(500).json({
            error: true,
            message: err.message
        })
    });
}

exports.insertarPersona = async function(req, res, next){
    /*post - formato json
    {
	    "id": 1,
	    "url": "https://swapi.py4e.com/api/people/1"
    }
    */
    const idPersona = req.body.id;
    const urlPersona = req.body.url;

    if(idPersona == undefined || idPersona == "" || idPersona == null){
        return res.status(404).json({
            error: true,
            message: "id de persona no enviado"
        })
    }

    if(urlPersona == undefined || urlPersona == "" || urlPersona == null){
        return res.status(404).json({
            error: true,
            message: "url de persona no enviado"
        })
    }

    const response = await fetch(urlPersona);
    const JsonResponse = await response.json();

    if(!JsonResponse){
        return res.status(404).json({
            error: true,
            message: "url " + urlPersona + " no responde"
        })
    }
    //console.log(JsonResponse)
    const bodyPersona = {...JsonResponse, 
        id: idPersona,
        nombre: JsonResponse.name ? JsonResponse.name : "",
        anio_nacimiento: JsonResponse.birth_year ? JsonResponse.birth_year : "",
        ojo_color: JsonResponse.eye_color ? JsonResponse.eye_color : "",
        genero: JsonResponse.gender ? JsonResponse.gender : "",
        cabello_color: JsonResponse.hair_color ? JsonResponse.hair_color : "",
        altura: JsonResponse.height ? JsonResponse.height : "",
        masa: JsonResponse.mass ? JsonResponse.mass : "",
        piel_color: JsonResponse.skin_color ? JsonResponse.skin_color : "",
        casa_mundo: JsonResponse.homeworld ? JsonResponse.homeworld : "",
        peliculas: JsonResponse.films ? JsonResponse.films : [],
        especies: JsonResponse.species ? JsonResponse.species : [],
        navesEstelares: JsonResponse.starships ? JsonResponse.starships : [],
        vehiculos: JsonResponse.vehicles ? JsonResponse.vehicles : [],
        url: JsonResponse.url ? JsonResponse.url : "",
        creacion: JsonResponse.created ? JsonResponse.created : "",
        edicion: JsonResponse.edited ? JsonResponse.edited : ""
    }

    personService.insertarPersona(bodyPersona)
    .then(resp =>{
        return res.json({message:"persona creada correctamente"});
    })
    .catch(err =>{
        console.log("error: " + err.message);
        return res.status(500).json({
            error: true,
            message: err.message
        })
    });
}