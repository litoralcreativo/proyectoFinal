const express = require('express');
const router = express.Router();
const {getSingle} = require('./../models/usuarios')

const getDashBoard = async (req, res) => {
    const [{nombre}] = await getSingle(req.session.userId)
    const amount = req.session.cartAmount;
    res.render('users/dashboard', {nombre, amount})
}

router.get('/', getDashBoard);

module.exports = router;
