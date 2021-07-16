const verifyUser = (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        res.render('login', {message: 'necesitas loguearte para acceder'})
    }
}

const verifyAdmin = (req, res, next) => {
    if (req.session.admin) {
        next();
    } else {
        res.render('unauthorised');
    }
}

module.exports = {verifyUser, verifyAdmin};