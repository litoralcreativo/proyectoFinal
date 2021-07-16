const {schemas} = require('./schemas/usuarios');

const validateLogin = (req, res, next) => {
    const {error, value} = schemas.login.validate(req.body);
    error ? res.render('login', error.details[0].message) : next();
}

const validateRegister = (req, res, next) => {
    const {error, value} = schemas.registro.validate(req.body);
    error ? res.json(error.details[0].message) : next();
}

module.exports = {validateLogin, validateRegister}