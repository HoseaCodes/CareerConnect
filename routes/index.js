const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('index')
});

router.get('/home', function(req, res) {
    res.render('home');
});

router.get('/jobBoard', function(req, res) {
    res.render('jobBoard');
});
router.get('/user', function(req, res){
    res.render('user');
});

module.exports = router;