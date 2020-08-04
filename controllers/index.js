const Hunter = require('../models/hunter');

module.exports = {
    index,
}

function index(req, res) {
    Hunter.find({}, function(err, hunters) {
        res.render('index', {
            hunters,
            user: req.user
        });
    });
}

