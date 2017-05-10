var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Question = mongoose.model('Question');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create');
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
