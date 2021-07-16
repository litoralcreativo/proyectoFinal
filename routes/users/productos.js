const express = require('express');
const router = express.Router();
const {
    getAllByCat, 
    getSingle, 
    getCategorias, 
    getPartes, 
    getEstados, 
    updateIngrediente, 
    deleteIngrediente, 
    createCategoria: getCat, 
    deleteCategoria: delCat,
} = require('../../models/ingredientes');
const mdoelCarrito = require('../../models/carrito')
const {nutrients} = require('../../services/nutrients');
const { addToCart } = require('../../services/cart')
const { verifyUser } = require('../../middlewares/auth');


const categorias = async (req, res) => {
    const categorias = await getCategorias();
    const amount = req.session.cartAmount;
    res.render('users/categorias', {categorias, amount});
}

const gatAllByCat = async (req, res) => {
    const {id: idCat} = req.params;
    const ingredientes = await getAllByCat(idCat);
    const amount = req.session.cartAmount;
    res.render('users/productos', {ingredientes, idCat, amount});
}

const single = async (req, res) => {
    const {id} = req.params;
    let [ingrediente] = await getSingle(id);
    ingrediente = nutrients(ingrediente);
    res.render('users/producto', ingrediente);
}

const insertCarrito = async (req, res) => {
    const {id: id_producto, amount: cantidad} = req.params;
    const id_usuario = req.session.userId
    const obj = {
        id_producto,
        id_usuario,
        cantidad,
    }
    req.session.cartAmount++;
    const result = await addToCart( id_producto, obj);
    res.redirect('/users/cart');
}


router.get('/', categorias);
router.get('/cat:id', gatAllByCat);
router.get('/single/:id', single);
router.get('/buy/:id/:amount', verifyUser, insertCarrito);

module.exports = router;