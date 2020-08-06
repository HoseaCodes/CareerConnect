const Hunter = require('../models/hunter');

module.exports = {
    index,
    addComment,
    deleteComment,
    edit,
    update, 
}

function index(req, res) {
    Hunter.find({}, function(err, hunters) {
      res.render('feed/index', { 
        hunters, 
        user: req.user,  
      });
    });
  }
  
  function addComment(req, res, next) {
    req.user.comments.push(req.body);
    req.user.save(function(err) {
      res.redirect('/feed');
    });
  }


  function deleteComment(req, res) {
      req.user.comments.splice(req.params.id, 1);
      req.user.save(function(err) {
        res.redirect('/feed');    
      });
}

function edit(req, res) {
  Hunter.findById(req.user._id, function(err, hunter) {
    const comment = hunter.comments.id(req.params.id);
    console.log(comment);
    res.render('feed/edit', {
      hunter, 
      user: req.user, 
      comment
    });
  });
}

function update(req, res) {
  Hunter.findById(req.user._id, function(err, hunter) {
    const comment = hunter.comments.id(req.params.id);
    console.log(comment);
    const oldComment = hunter.comments.indexOf(comment) 
    console.log(oldComment);
    hunter.comments.splice(oldComment, 1, req.body);
  
     hunter.save(function (err) {
       res.redirect(`/feed`);
     })
    })
}
