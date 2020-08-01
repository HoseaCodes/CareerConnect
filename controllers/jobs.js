const jobHunter = require('../models/job');

module.exports = {
  index,
};

function index(req, res) {
    jobHunter.find({}, function(err, hunters) {
      res.render('jobs/index', { 
        hunters,
        user: req.user  
      });
    });
  }
  
  
  