
const router = require('express').Router();
const assessmentsCtrl = require('../controllers/assessments')

router.get('/assessments', assessmentsCtrl.index);
router.post('/assessments', isLoggedIn, assessmentsCtrl.addAssessment);
router.delete('/assessments/:id', isLoggedIn, assessmentsCtrl.deleteAssessment);

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
