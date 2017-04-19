var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

/* post users listing. */
router.post('/', function(req, res, next) {
  User.create({
    id: req.body.id,
    password: req.body.password
  },function( error,user){
    if(error){
      console.log(error);
    }else{
      console.log("User saved");
      res.render('index');
    }
  });
});

module.exports = router;
