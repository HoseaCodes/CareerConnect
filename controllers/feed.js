const Hunter = require('../models/hunter');

module.exports = {
    index,
    addComment,
    deleteComment
}

function index(req, res) {
    Hunter.find({}, function(err, hunters) {
      res.render('feed/index', { 
        hunters, 
        user: req.user  
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
    Hunter.deleteComment(req.params.id);
    res.redirect('/feed')
  }


  // function show(req, res) {
  //   res.render('feed/show', {
  //     feed: Feed.getOne(req.params.id),
  //     feedNum: parseInt(req.params.id) + 1
  //   });
  // }

  // function newFeed(req, res) {
  //   res.render('feed/new', {

  //   });
  // }
  
  // function create(req, res) {
  //   req.body.name = user;
  //   Feed.create(req.body);
  //   res.redirect('/feed');
  // }
  
  // function deleteFeed(req, res) {
  //   Feed.deleteOne(req.params.id);
  //   res.redirect('/feeds');
  // }