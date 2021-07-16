const express = require('express');
const router = express.Router();

const showIndex  = (req, res) => res.render('admin/index')

router.get('/', showIndex)
module.exports = router;