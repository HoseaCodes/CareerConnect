const Hunter = require('../models/hunter');

module.exports = {
    index,
    addAssessment,
    deleteAssessment,

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

function deleteAssessment(req, res) {
    req.user.assessments.splice(req.params.id, 1);
    req.user.save(function (err) {
        if (err) return res.render('/assessments')
        res.redirect('/assessments');
    });
}
