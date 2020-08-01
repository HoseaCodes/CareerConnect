const express = require('express');
const router = express.Router();
const Job = require('');

router.get('/', function(req, res) {
    res.render('jobs/index', {
        jobs: Job.getAll()
    });
});


module.exports = router;