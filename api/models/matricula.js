const Sequelize = require('sequelize');
var db = require("../database/db.js");



const Matricula = db.sequelize.define('MATRICULA', {

    ID_MATRICULA: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true
    },
    CODIGO_MATRICULA:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    ESTADO_MATRICULA:
    {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    FECHA_MATRICULA:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    PERIODO:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

})

module.exports = Materia;