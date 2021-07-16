const express = require('express');
const router = express.Router();
const { validateLogin } = require('./../models/usuarios')
const { getAll : getCart } = require('./../models/carrito')
const sha1 = require('sha1');

const showLogin = (req, res) => {
    res.render('login', {message: ''})
}

const loginUser = async (req, res) => {
    let {username, pass} = req.body;
    pass = sha1(pass);
    const [logged] = await validateLogin(username, pass);
    if (!logged) {
        res.render('login', {message: 'Usuario o contraseña incorrectos'})
    } else if (logged.habilitado === 0) {
        res.render( 'verify', {message: "Primero tenes que habilitar tu cuenta 🙄"})
    } else {
        const {id, admin} = logged;

        req.session.userId = id;
        req.session.admin = admin == 1;
        const cart = await getCart(id);
        req.session.cartAmount = cart.length;

        console.log(req.session);

        admin == 1 ? res.redirect('/admin') : res.redirect('/users');
    }
    
}

router.get('/', showLogin);
router.post('/', loginUser);

module.exports = router;