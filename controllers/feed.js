const Hunter = require('../models/hunter');
const rootURL ="https://hacker-news.firebaseio.com/v0/"
const request = require('request');

module.exports = {
    index,
    addComment,
    deleteComment,
    edit,
    update, 
    addNews
}

function index(req, res) {
  Hunter.find({}, function(err, hunters) {
    res.render('feed/index', { 
      hunters, 
      user: req.user, 
      userData: "", 
      newsData: [],
      });
    });
  }

function addNews(req, res) {
  const topStories = {
        url: rootURL + "newstories.json?print=pretty"
      }
      const newsData = [];
      console.log(topStories);
      request(topStories, function(err, repsonse, news) {
        const newsArray = JSON.parse(news);
        newsArray.slice(0,5).forEach(function(liveFeed) {
          const story = {
            url:  `https://hacker-news.firebaseio.com/v0/item/${liveFeed}.json?print=pretty`
          }
          console.log(story);
        request( story, function(err, reposnse, finalCall) {
          const test = JSON.parse(finalCall);
          newsData.push(test);
          console.log(JSON.parse(finalCall));
          console.log(newsData);
          res.redirect('/feed', { 
            newsData
            });
          });
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
    console.log('req.user', req.user);
    console.log('Career title', req.user.workExp.title);
    console.log('Career highlight', req.user.workExp.highlight);
    console.log('Career wDate', req.user.workExp.wDate);
    console.log('req.user._id', req.user._id);
    console.log('req.params', req.params);
    console.log("req.parmas.id:", req.params.id);
    console.log("req.body", req.body);
    const comment = hunter.comments.id(req.params.id);
    console.log('find me',comment);
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
