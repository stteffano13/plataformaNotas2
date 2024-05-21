'use stric'


const express = require('express');
const NotaController = require('../controllers/nota');
const md_auth = require('../middleware/authenticated');

const api = express.Router(); // esto sirve para crear las rutas 
api.post('/registerNota',md_auth.ensureAuth, NotaController.saveNotas);
api.post('/registerNotaB',md_auth.ensureAuth, NotaController.saveNotasB);
api.post('/registerNotaC',md_auth.ensureAuth, NotaController.saveNotasC);
api.post('/buscarNotas',md_auth.ensureAuth, NotaController.buscarNotas);
api.post('/buscarNotasB',md_auth.ensureAuth, NotaController.buscarNotasB);
api.post('/buscarNotasC',md_auth.ensureAuth, NotaController.buscarNotasC);
api.post('/buscarNotasEstudiante',md_auth.ensureAuth, NotaController.buscarNotasEstudiante);
api.post('/buscarNotasEstudianteB',md_auth.ensureAuth, NotaController.buscarNotasEstudianteB);
api.post('/buscarNotasEstudianteC',md_auth.ensureAuth, NotaController.buscarNotasEstudianteC);
api.post('/buscarNotasMatris',md_auth.ensureAuth, NotaController.buscarNotasMatris);
api.post('/buscarNotasMatrisB',md_auth.ensureAuth, NotaController.buscarNotasMatrisB);
api.post('/buscarNotasMatrisC',md_auth.ensureAuth, NotaController.buscarNotasMatrisC);

api.post('/subirNotas',md_auth.ensureAuth,NotaController.subirNotas);
module.exports = api;