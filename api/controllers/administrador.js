'use strcit'

var bcrypt = require('bcrypt-nodejs');

var Administrador = require('../models/administrador');
var Periodo = require('../models/periodo');//importar el modelo del usuario  o lo que son las clases comunes
var jwt = require('../services/jwt');
var SubirNota = require('../models/subirNota');


async function saveAdministrador(req, res) {


    try {
        var params = req.body; // cuerpo de la peticion post de la direccion http por post
        // console.log(params);
        let administradorEncontrado = await Administrador.findOne({ where: { CORREO_ADMINISTRADOR: params.correo } });

        if (administradorEncontrado) {
            return res.status(402).send({
                message: "El Usuario ya Existe"
            });
        } else {
            let administrador = Administrador.build();
            administrador.CORREO_ADMINISTRADOR = params.correo;
            administrador.CONTRASENA_ADMINISTRADOR = params.contrasena;


            if (params.contrasena) {

                // encriptar contrasena y guardar datos
                await bcrypt.hash(params.contrasena, null, null, async function (err, hash) {

                    administrador.CONTRASENA_ADMINISTRADOR = hash;
                    let administradorGuardado = await administrador.save();
                    if (administradorGuardado) {
                        res.status(200).send({
                            message: 'Administrador guardado correctamente',
                            data: administradorGuardado
                        });
                    }

                });


            } else {
                res.status(500).send({
                    message: 'Introduce la contraseña'
                });
            }
        }
    } catch (err) {
        res.status(500).send({
            message: err.name
        });
    }

}

module.exports = {          // para exportar todas las funciones de este modulo

    saveAdministrador,




};