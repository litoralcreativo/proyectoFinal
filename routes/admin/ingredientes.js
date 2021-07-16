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
const {nutrients} = require('../../services/nutrients')

const multer = require('multer');
const config = { dest: `./public/tmp`};
const upload = multer(config);
const service = require('./../../services/ingredientes')

const gatAllByCat = async (req, res) => {
    const {id: idCat} = req.params;
    const ingredientes = await getAllByCat(idCat);
    console.log(ingredientes[0]);
    res.render('admin/ingredientes', {ingredientes, idCat});
}

const single = async (req, res) => {
    const {id} = req.params;
    let [ingrediente] = await getSingle(id);
    ingrediente = nutrients(ingrediente);
    res.render('admin/ingrediente', ingrediente);
}

const getCreate = async (req, res) => {
    const categorias = await getCategorias();
    const partes = await getPartes();
    const estados = await getEstados();
    res.render('admin/createIngrediente', {categorias, partes, estados});
}

const createIngredient = async (req, res) => {
    const {body: ingrediente} = req;
    const img = req.file;
    const idImg = await service.createIngrediente(ingrediente, img);
    res.redirect('/admin/ingredientes')
}

const getUpdate = async (req, res) => {
    const {id} = req.params;
    let [ingrediente] = await getSingle(id);
    const categorias = await getCategorias();
    const partes = await getPartes();
    const estados = await getEstados();

    res.render('admin/updateIngrediente', {ingrediente, categorias, partes, estados});
}

const updateIngredient = async (req, res) => {
    const {id, retCat} = req.params;
    const {body: ingrediente} = req;
    const result = await updateIngrediente(id, ingrediente);
    res.redirect(`/admin/ingredientes/cat${retCat}`);
}

const deleteIngredient = async (req, res) => {
    const {id, retCat} = req.params;
    const result = deleteIngrediente(id);
    res.redirect(`/admin/ingredientes/cat${retCat}`);
}

const categorias = async (req, res) => {
    const categorias = await getCategorias();
    res.render('admin/categorias', {categorias});
}

const getCreateCategoria = async (req, res) => {
    res.render('admin/createCategoria');
}

const createCategoria = async (req, res) => {
    const {body: cat} = req;
    const {insertId} = await getCat(cat);
    console.log(insertId);
    res.redirect('/admin/ingredientes')
}

const deleteCategoria = async (req, res) => {
    const {id} = req.params;
    const result = await delCat(id);
    console.log(result);
    res.redirect(`/admin/ingredientes`);
}

router.get('/', categorias);
router.get('/cat:id', gatAllByCat);
router.get('/single/:id', single);

router.get('/create', getCreate);
router.post('/create', upload.single("imagen"), createIngredient);

router.get('/create-cat', getCreateCategoria);
router.post('/create-cat', createCategoria);

router.get('/update/:id', getUpdate);
router.post('/update/:id/:retCat', updateIngredient);

router.get('/delete/:id/:retCat', deleteIngredient);
router.get('/delete-cat/:id', deleteCategoria);
module.exports = router;