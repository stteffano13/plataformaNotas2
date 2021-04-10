const Sequelize = require('sequelize');
var db = require("../database/db.js");



const Docente = db.sequelize.define('DOCENTE', {

    ID_DOCENTE: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true
    },
    CODIGO_DOCENTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    NOMBRE_DOCENTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    APELLIDO_DOCENTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    CORREO_DOCENTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    CONTRASENA_DOCENTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    CEDULA_DOCENTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    CELULAR_DOCENTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    ESTADO_DOCENTE:
    {
        type: Sequelize.NUMBER,
        allowNull: false
    }

})

module.exports = Docente;