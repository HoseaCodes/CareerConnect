const router = require('express').Router();
const userCtrl = require('../controllers/user');


router.get('/user', userCtrl.index);
router.post('/user/userform', isLoggedIn, userCtrl.addUser);
// router.delete('/user/:id', isLoggedIn, userCtrl.deleteComment);
// router.get('/user/:id/edit', isLoggedIn, userCtrl.edit);
// router.put('/user/:id', isLoggedIn, userCtrl.update);


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next ();
    res.redirect('/auth/google');
}

module.exports = router;