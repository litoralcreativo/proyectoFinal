const Joi = require('@hapi/joi');

const schemas = {
    login: Joi.object().keys({
        username: Joi
            .string()
            .required()
            /* .message({
                "string.empty" : "El nombre de usuario es obligatorio"
            }) */
            ,
        pass: Joi
            .string()
            .min(3)
            .max(20)
            .required()
            /* .message({
                "string.empty" : "Se debe escribir la pass",
                "string.min" : "La pass debe tener como minimo 3 caracteres",
                "string.max" : "La pass puede tener como maximo 20 caracteres",
            }) */
            ,
    }),
    registro: Joi.object().keys({
        username: Joi.string().required(),
        pass: Joi.string().min(3).max(20).required(),
        mail: Joi.string().email().required(),
        telefono: Joi.number().required(),
    })
}

module.exports = {schemas}