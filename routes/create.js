var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Chat = mongoose.model('Chat');


/* GET home page. */
router.get('/', function(req, res, next) {
  Question.find({},function(err,data){
      res.render('create',{data:data});
  });
});

router.get('/:id/:question',function(req,res,next){
  Chat.find({"chat_id":req.params.id},function(err,data){
        console.log(req.params.id);
        console.log(req.params.question);
        res.render('chat',{question_id: req.params.id, question: req.params.question, data:data});
  });
});

router.post('/', function(req, res, next) {
    Question.create({
    question: req.body.question
  },function(error,q){
    if(error){
      console.log(error);
    }else{
      console.log("question saved");
      console.log("question number is"+ q.id +"and question is"+q.question);
      res.render('chat',{question_id: q.id, question: q.question, data: null});
    }
  });
});
module.exports = router;
