var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({
  usernameField :'id',
  passwordField : 'password'
  },
  function(req,id,password, done){
    var User = mongoose.model('User');
    console.log(req.body.id);
    User.findOne({ "id": id},function(err, user){
      if(err){
        console.log(err);
        return done(err);
      }
      if(!user || !user.validPassword(password)){
        return done(null, false);
      }
      return done(null, user);
    });
  }
));
/*  get method */
router.get('/', function(req, res, next) {
  res.render('login');
  console.log('ok');
});

/* post method */
router.post('/',function(req,res,next){
//  passport.authenticate("local",{session:false,successRedirect:'/',failureRedirect:'/login'});
//});
  var Users = mongoose.model('User');
  var id = req.body.id;
  var pass = req.body.password;
  Users.findOne({ "id": id},function(err, user){
    if(err){
      console.log(err);
    }
    else{
      if(user.password === pass){
      req.session.username = id;
      //res.render('chat', {name: req.session.username};
      res.redirect("../create");
    }
      else{
      res.render('login');
    }
    }
  });
});

module.exports = router;
