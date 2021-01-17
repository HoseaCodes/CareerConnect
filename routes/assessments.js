const router = require('express').Router();
const passport = require('passport');
const assessmentsCtrl = require('../controllers/assessments')

router.get('/assessments', assessmentsCtrl.index);

module.exports = router;