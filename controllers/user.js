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
            user: req.user, 
        });
    });
}

function newForm(req, res) {
    Hunter.find({}, function(err, hunters) {
        res.render('user/new', {
            hunters,
            user: req.user
        });
    });
}

  function addUser(req, res, next) {
    Hunter.findById(req.params.id, function(err, user){
        user.job.push(req.body);
        user.phoneNo.push(req.body);
        user.groups.push(req.body);
        user.events.push(req.body);
        user.workExp.push(req.body);
        user.projects.push(req.body);
        user.education.push(req.body);
        console.log("User create is", req.body);
        console.log(err);
        user.save(function(err) {
          res.redirect('/user', {
              hunters
          });
        });
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

