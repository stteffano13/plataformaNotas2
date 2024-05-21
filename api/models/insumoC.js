const Sequelize = require('sequelize');
var db = require("../database/db.js");



const InsumoC = db.sequelize.define('INSUMOC', {
   
    ID_INSUMOC: {
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
    DESCPUFORO:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCPUTAREA1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCPUTAREA2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCPUTAREA3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCPUTAREA4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCSUFORO:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCSUTAREA1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCSUTAREA2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCSUTAREA3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCSUTAREA4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCTUFORO:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCTUTAREA1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCTUTAREA2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCTUTAREA3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCTUTAREA4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCCUFORO:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCCUTAREA1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCCUTAREA2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCCUTAREA3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCCUTAREA4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
   

    DESCTUFORO:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCTUTAREA1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCTUTAREA2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCTUTAREA3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCTUTAREA4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },

    DESCQUFORO:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQUTAREA1:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQUTAREA2:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQUTAREA3:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    DESCQUTAREA4:
    {
        type: Sequelize.STRING,
        allowNull: true
    },

   

    PERIODO:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
   
    
 
   
   
}, {
    timestamps: false,
    id: false

});

module.exports = InsumoC