var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Chat = mongoose.model('Chat');
/* GET home page. */
router.get('/', function(req, res, next) {
  Chat.find({},function(err,data){
    for(var i=0;i<data.length;i++){
      console.log(data[i]);
    }
      res.render('chat',{data:data});
  })

});

module.exports = router;
