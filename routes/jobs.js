const router = require('express').Router();
const passport = require('passport');
const jobsCtrl = require('../controllers/jobs');

router.get('/jobs', jobsCtrl.index);



router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;