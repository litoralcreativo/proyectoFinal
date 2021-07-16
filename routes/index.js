const express = require('express');
const router = express.Router();

const getIndex = (req, res) => {
  if (req.session.admin) {
    res.redirect('/admin')
  } else if (req.session.userId) {
    res.redirect('/users')
  } else {
    res.render('index');
  }
}

router.get('/', getIndex);
module.exports = router;
