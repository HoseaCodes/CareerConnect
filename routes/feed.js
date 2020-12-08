const express = require('express');
const router = express.Router();
const feedCtrl = require('../controllers/feed');


router.get('/feed', feedCtrl.index);
router.post('/feed', isLoggedIn, feedCtrl.addComment);
router.delete('/feed/:id', isLoggedIn, feedCtrl.deleteComment);
router.get('/feed/:id/edit', isLoggedIn, feedCtrl.edit);
router.put('/feed/:id', isLoggedIn, feedCtrl.update);
// router.post('/feed', isLoggedIn, feedCtrl.addNews);


// router.post('/feed', feedCtrl.create);
// router.get('/new', feedCtrl.new);
// router.get('/:id', feedCtrl.show);
// router.delete('/:id', feedCtrl.delete);


router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}




module.exports = router;