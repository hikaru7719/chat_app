var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

//modelの定義
var db = require('./model/database');
// contorllerの定義
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var chat = require('./routes/chat');
var create = require('./routes/create');
var explain = require('./routes/explain');
var sessionMiddleware = session({
  secret: 'mallow',
  resave: false,
  saveUninitialized: false,
  cookie:{
  httpOnly: false,
  secure: false,
  maxage: 1000 * 60 * 30
}});


app.session = sessionMiddleware;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(sessionMiddleware);

app.use('/addUser',users);
app.use('/',index);
app.use('/login',login);
app.use(function(req, res, next){
  console.log(req.session.username);
  if(req.session.username){
    next();
  }else{
    res.redirect('login');
  }
});

app.use('/chat',chat);
app.use('/create',create);
app.use('/explain',explain);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
