const express = require('express');
const router = express.Router();
const {getAll, getSingle, updateUser: updateUsuario} = require('./../../models/usuarios');

const all = async (req, res) => {
  const usuarios = await getAll();
  res.render('admin/users', {usuarios})
}

const single = async (req, res) => {
  const {id} = req.params;
  let [usuario] = await getSingle(id);
  usuario.h = usuario.habilitado === 1;
  usuario.a = usuario.admin === 1;
  res.render('admin/user', usuario);
}

const getUpdate = async (req, res) => {
  const {id} = req.params;
  let [usuario] = await getSingle(id);
  usuario.a = usuario.admin === 1;
  res.render('admin/updateUsuario', usuario);
}

const updateUser = async (req, res) => {
  const {id} = req.params;
  const {body: user} = req;
  user.admin = user.admin? 1 : 0;
  const result = await updateUsuario(id, user);
  res.redirect('/admin/users');
}



router.get('/', all);
router.get('/single/:id', single);

router.get('/update/:id', getUpdate);
router.post('/update/:id', updateUser);

module.exports = router;