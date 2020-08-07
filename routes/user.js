const router = require('express').Router();
const userCtrl = require('../controllers/user');


router.get('/user', userCtrl.index);
router.post('/user', isLoggedIn, userCtrl.addUser);
router.get('/user/new', isLoggedIn, userCtrl.new);
// router.delete('/user/:id', isLoggedIn, userCtrl.deleteComment);
// router.get('/user/:id/edit', isLoggedIn, userCtrl.edit);
// router.put('/user/:id', isLoggedIn, userCtrl.update);


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next ();
    res.redirect('/auth/google');
}

module.exports = router;