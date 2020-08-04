const router = require('express').Router();
const jobsCtrl = require('../controllers/jobs');

router.get('/jobs', jobsCtrl.index);

router.get('/', function(req, res) {
    res.render('jobs/index', {
        jobs: Job.getAll()
    });
});


module.exports = router;