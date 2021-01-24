const express = require('express');
const router = express.Router();

const ctrlPersona = require('../controllers/persona.controller');

router.get('/persona/buscar', ctrlPersona.getPersona);
router.get('/persona/buscar/:idPersona', ctrlPersona.getPersonaId);
router.post('/persona/agregar', ctrlPersona.insertarPersona);

module.exports = router;