var mongoose = require('mongoose');

var mURI='mongodb://127.0.0.1/chat';
mongoose.connect(mURI,function(err){
  if(err){
    console.log(err);
  }
});



var UserSchema = new mongoose.Schema({
  id: {type: String, index: {unique: true }},
  password: String
},{
  versionKey: false
});
mongoose.model('User',UserSchema);

var ChatScema = new mongoose.Schema({
  chat_id: String,
  message: String,
  time: { type: Date, default: Date.now},
  user: { type: String, default: "who"}
},{
  versionKey: false
});
mongoose.model('Chat',ChatScema);


var QuestionScema = new mongoose.Schema({
  question: String
},{
  versionKey: false
});
mongoose.model('Question',QuestionScema);
