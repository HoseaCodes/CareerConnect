const Hunter = require('../models/hunter');

module.exports = {
    index,
}

function index(req, res) {
    Hunter.find({}, function (err, hunters) {
        if (err) return res.render('index')
        res.render('index', {
            hunters,
            user: req.user
        });
    });
}

