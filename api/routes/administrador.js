'use stric'


const express = require('express');
const AdministradorController = require('../controllers/administrador');
const md_auth = require('../middleware/authenticated');

const api = express.Router(); // esto sirve para crear las rutas 
api.post('/registerAdministrador', AdministradorController.saveAdministrador);


module.exports = api;// exportamos el router de express para que las routas funcionen por todo el back end