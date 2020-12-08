const Hunter = require('../models/hunter');

module.exports = {
  index,
  search
};

function index(req, res) {
  Hunter.find({}, function (err, hunters) {
    if (err) return res.render('jobs/index')
    res.render('jobs/index', {
      userData: "",
      hunters,
      user: req.user,
    });
  });
}

function search(req, res) {
  console.log(`jobs: ${req.body.jobs}`);
  res.render('/jobs', {
    userData: "",
    user: req.user
  });
};



