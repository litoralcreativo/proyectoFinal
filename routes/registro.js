const express = require('express');
const router = express.Router();
const {send} = require('./../services/mail');
const sha1 = require('sha1');
const {v4: uuid} = require('uuid');
const { createUser, verifyUser: verify } = require('./../models/usuarios');

const showRegisterForm = (req, res) => {
    res.render('registro');
};

const registerUser = async (req, res) => {
    const {body: usuario} = req;
    const uid = uuid();

    const usuarioFinal = {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        phone: usuario.phone,
        username: usuario.username,
        pass: sha1(usuario.pass),
        confirmacionEmail: uid
    }

    console.log(usuarioFinal);

    const {messageId} = await createUser(usuarioFinal)
    send({
        mail: usuarioFinal.email, 
        asunto: 'Gracias por registrarte', 
        cuerpo: `
        <h1>Bienvenido ${usuarioFinal.username}</h1>
        <a href="${process.env.URL_SERVER}:${process.env.PORT}/registro/verify/${usuarioFinal.confirmacionEmail}">Activar cuenta</a>
        `
    });
    res.redirect('/')
}

const verifyUser = async (req, res) => {
    const {uid} = req.params;
    const {affectedRows, changedRows} = await verify(uid);
    let message = '';
    if (affectedRows == 0){
        message = "No se encontro ninguna cuenta para habilitar 🤔"
    } else {
        if (changedRows == 0) message = "Esta cuenta ya se encuentra habilitada 😀";
        if (changedRows == 1) message = "Listo! Acabas de activar tu cuenta 😁";
    }
    res.render('verify', {message})
}

router.get('/verify/:uid', verifyUser)
router.get('/', showRegisterForm);
router.post('/', registerUser)

module.exports = router;