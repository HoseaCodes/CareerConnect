const Hunter = require('../models/hunter');

module.exports = {
    index,
}

function index(req, res) {
    Hunter.find({}, function (err, hunters) {
        if (err) return res.render('feed/index')
        res.render('assessments/index', {
            hunters,
            user: req.user,
            userData: "",
        });
        console.log(err)
    });
}
