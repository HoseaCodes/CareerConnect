const Hunter = require('../models/hunter');

module.exports = {
  index,
  
};

function index(req, res) {
    Hunter.find({}, function(err, hunters) {
      res.render('jobs/index', { 
        hunters,
        user: req.user  
      });
    });
  }

 
  
  