const Hunter = require('../models/hunter');

module.exports = {
    index,
    addAssessment
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


function addAssessment(req, res, next) {
    req.user.assessments.push(req.body);
    req.user.save(function (err) {
        if (err) return console.log(err)
        res.redirect('/assessments');
    });
}
