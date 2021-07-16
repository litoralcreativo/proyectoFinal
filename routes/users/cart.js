const express = require('express');
const router = express.Router();
const { getAll, deleteCarrito } = require('./../../models/carrito');

const showCart = async (req, res) => {
    const carrito = await getAll(req.session.userId);
    let precioTotal = 0;
    carrito.forEach(item => {
        item.precioFinal = ((item.cantidad/1000) * item.precio);
        precioTotal += item.precioFinal;
        item.precioFinal = item.precioFinal.toFixed(2)
    })
    const amount = req.session.cartAmount;
    precioTotal = precioTotal.toFixed(2)
    res.render('users/cart', {carrito, precioTotal, amount});
}

const compraCart = async (req, res) => {
    const {insertId} = await deleteCarrito(req.session.userId);
    console.log(insertId);
    req.session.cartAmount = 0;
    res.redirect('/users/cart')
}

router.get('/compra', compraCart)
router.get('/', showCart);
module.exports = router;