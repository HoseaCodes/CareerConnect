const express = require('express');
const router = express.Router();
const feedCtrl = require('../controllers/feed');


router.get('/feed', feedCtrl.index);
router.post('/feed', isLoggedIn, feedCtrl.addComment);
router.delete('/feed/:id', isLoggedIn, feedCtrl.deleteComment);

// router.post('/feed', feedCtrl.create);
// router.get('/new', feedCtrl.new);
// router.get('/:id', feedCtrl.show);
// router.delete('/:id', feedCtrl.delete);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next ();
    res.redirect('/auth/google');
}


module.exports = router;