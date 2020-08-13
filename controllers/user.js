const Hunter = require('../models/hunter');

module.exports = {
    index,
    new: newForm,
    create,
}

function index(req, res) {
    Hunter.find({}, function(err, hunters) {
        res.render('user/index', {
            hunters,
            user: req.user, 
        });
    });
}

function newForm(req, res) {
    Hunter.findById(req.user._id, function(err, hunters) {
        console.log("newForm request", hunters);
        res.render('user/new', {
            hunters,
            user: req.user,
        });
    });
}

  function create(req, res, next) {
    req.body.groups = req.body.groups.replace(/\s*,\s*/g, ",");
    if(req.body.groups) req.body.groups = req.body.groups.split(",");
    req.body.events = req.body.events.replace(/\s*,\s*/g, ",")
    if(req.body.events) req.body.events = req.body.events.split(",");
    const hunter = new Hunter(req.body);
       
        console.log("User create is", hunter);
        hunter.save(function(err) {

            if(err) return res.render('user/new');
            
            console.log("After save create is", hunter);
          res.redirect('/user')
        });
    
  }
