'Use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const path = require('path');

//Notificaciones

//cargar Rutas

var ruta_prueba = require('./routes/prueba');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //convertir a json als peticiones

//configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

// rutas base

app.use('/api', ruta_prueba);



module.exports = app; // hace referencia a la variable de express

