const router = require('express').Router();
const passport = require('passport');
const jobsCtrl = require('../controllers/jobs');
const request = require('request');


const rootURL = "https://jobs.github.com/positions.json?"


router.get('/jobs', jobsCtrl.index);



router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

router.post('/jobs', function (req, res) {
    request(`${rootURL}&=${req.body.search.toLowerCase()}`,
        function (err, reposnse, body) {
            const userData = JSON.parse(body);
            res.render('jobs/index', { userData });
        }
    );
});




module.exports = router;