'use stric'


const express = require('express');
const MateriaController = require('../controllers/materia');
const md_auth = require('../middleware/authenticated');

const api = express.Router(); // esto sirve para crear las rutas 
api.post('/registerMateria', MateriaController.saveAsignacion);
api.get('/buscarMaterias/:busqueda', md_auth.ensureAuth, MateriaController.busquedaMateria);
api.get('/getListadoMioMaterias', md_auth.ensureAuth, MateriaController.getListadoMioMaterias);
api.put('/update-materia/:id', md_auth.ensureAuth, MateriaController.updateMateria);
api.get('/getListadoMateriasCurso/:curso', MateriaController.getListadoMateriasCurso);

//api.get('/getListadoCursos',md_auth.ensureAuth, CursoController.getCursos);

module.exports = api;