const router = require('express').Router();
const passport = require('passport');
const assessmentsCtrl = require('../controllers/assessments')

router.get('/assessments', assessmentsCtrl.index);
router.post('/assessments', isLoggedIn, assessmentsCtrl.addAssessment);

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}