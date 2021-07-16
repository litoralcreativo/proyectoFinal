const express = require('express');
const router = express.Router();

const logout = (req, res) => {
        req.session.destroy();
    res.render('index');
}

router.get('/', logout);
module.exports = router;