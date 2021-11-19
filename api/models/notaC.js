const Sequelize = require('sequelize');
var db = require("../database/db.js");



const NotaC = db.sequelize.define('NOTAC', {
   
    ID_NOTAC: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true
    },
    ID_MATERIA:
    {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    ID_ESTUDIANTE:
    {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    PUFORO:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    PUTAREA1:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    PUTAREA2:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    PUTAREA3:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    PUTAREA4:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    PUEXAMEN:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    SUFORO:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    SUTAREA1:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    SUTAREA2:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    SUTAREA3:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    SUTAREA4:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    SUEXAMEN:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    TUFORO:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    TUTAREA1:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    TUTAREA2:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    TUTAREA3:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    TUTAREA4:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    TUEXAMEN:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    CUFORO:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    CUTAREA1:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    CUTAREA2:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    CUTAREA3:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    CUTAREA4:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    CUEXAMEN:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    EXAMENFINAL:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    PT:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    EXAMENSUPLETORIO:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    EXAMENREMEDIAL:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    EXAMENGRACIA:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    PERIODO:
    {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    
    
    
   
   
}, {
    timestamps: false,
    id: false

});

module.exports = NotaC