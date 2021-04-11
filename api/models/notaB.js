const Sequelize = require('sequelize');
var db = require("../database/db.js");



const InsumoB = db.sequelize.define('INSUMOB', {

    ID_NOTAB: {
        primaryKey: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true
    },
    Q1P1INSUMO1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P1INSUMO2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P1INSUMO3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P1INSUMO4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P1INSUMO5:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P1INSUMO6:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P2INSUMO1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P2INSUMO2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P2INSUMO3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P2INSUMO4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P2INSUMO5:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P2INSUMO6:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P3INSUMO1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P3INSUMO2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P3INSUMO3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P3INSUMO4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P3INSUMO5:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q1P3INSUMO6:
    {
        type: Sequelize.STRING,
        allowNull: true
    },

    EXAMEN1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },


    Q2P1INSUMO1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    CQ2P1INSUMO2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q2P1INSUMO3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q2P1INSUMO4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q2P1INSUMO5:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q2P1INSUMO6:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q2P2INSUMO1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q2P2INSUMO2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    Q2P2INSUMO3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },




    DESCQ2P2INSUMO4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQ2P2INSUMO5:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQ2P2INSUMO6:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQ2P3INSUMO1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQ2P3INSUMO2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQ2P3INSUMO3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQ2P3INSUMO4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },

    DESCQ2P3INSUMO5:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQ2P3INSUMO6:
    {
        type: Sequelize.STRING,
        allowNull: true
    },

    EXAMEN2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    EXAMENSUPLETORIO:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    EXAMENREMEDIAL:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    EXAMENGRACIA:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    PT:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    PEPRIODO:
    {
        type: Sequelize.STRING,
        allowNull: false
    },



});

module.exports = InsumoB