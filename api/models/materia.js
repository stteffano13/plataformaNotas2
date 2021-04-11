const Sequelize = require('sequelize');
var db = require("../database/db.js");


const Materia = db.sequelize.define('MATERIA', {

    ID_MATERIA: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true
    },
    CODIGO_MATERIA:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    NOMBRE_MATERIA:
    {
        type: Sequelize.STRING,
        allowNull: false
    },

    ESTADO_MATERIA:
    {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    PERIODO:
    {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    timestamps: false,
    id: false

})

module.exports = Materia;