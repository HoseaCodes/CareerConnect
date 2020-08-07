const Hunter = require('../models/hunter');

module.exports = {
    index,
    new: newForm,
    addUser,
}

function index(req, res) {
    Hunter.find({}, function(err, hunters) {
        res.render('user/index', {
            hunters,
            user: req.user
        });
    });
}

function newForm(req, res) {
    Hunter.find({}, function(err, hunters) {
        res.render('user/userform', {
            hunters,
            user: req.user
        });
    });
}

  function addUser(req, res, next) {
      req.user.job.push(req.body);
      req.user.phoneNo.push(req.body);
      req.user.groups.push(req.body);
      req.user.events.push(req.body);
      req.user.workExp.push(req.body);
      req.user.projects.push(req.body);
      req.user.education.push(req.body);
      req.user.save(function(err) {
        res.redirect('/user');
      });
  }

 


//   function deleteComment(req, res) {
//       req.user.comments.splice(req.params.id, 1);
//       req.user.save(function(err) {
//         res.redirect('/feed');    
//       });
// }

// function edit(req, res) {
//   Hunter.findById(req.user._id, function(err, hunter) {
//     const comment = hunter.comments.id(req.params.id);
//     console.log(comment);
//     res.render('feed/edit', {
//       hunter, 
//       user: req.user, 
//       comment
//     });
//   });
// }

// function update(req, res) {
//   Hunter.findById(req.user._id, function(err, hunter) {
//     const comment = hunter.comments.id(req.params.id);
//     console.log(comment);
//     const oldComment = hunter.comments.indexOf(comment) 
//     console.log(oldComment);
//     hunter.comments.splice(oldComment, 1, req.body);
  
//      hunter.save(function (err) {
//        res.redirect(`/feed`);
//      })
//     })
// }

