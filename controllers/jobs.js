const Hunter = require('../models/hunter');

module.exports = {
  index,
  search
};

function index(req, res) {
    Hunter.find({}, function(err, hunters) {
      res.render('jobs/index',  { 
        hunters,
        user: req.user,
        userData: "",  
      });
    });
  }
  
  function search(req, res) {
    console.log(`jobs: ${req.body.jobs}`);
    res.render('/jobs', {
      user: req.user

    });
};

 
  
  