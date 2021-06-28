const router = require('express').Router();
const bootcampCtrl = require('../controllers/bootcamp')

router.get('/bootcamp', bootcampCtrl.index);

module.exports = router;