const Sequelize = require('sequelize');
var db = require("../database/db.js");



const Estudiante = db.sequelize.define('ESTUDIANTE', {

    ID_ESTUDIANTE: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true
    },
    CODIGO_ESTUDIANTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    NOMBRE_ESTUDIANTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    APELLIDO_ESTUDIANTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    CORREO_ESTUDIANTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    CONTRASENA_ESTUDIANTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    CEDULA_ESTUDIANTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    CELULAR_ESTUDIANTE:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    ESTADO_ESTUDIANTE:
    {
        type: Sequelize.NUMBER,
        allowNull: false
    }

}, {
    timestamps: false,
    id: false

})

module.exports = Estudiante;