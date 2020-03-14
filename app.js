var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require("express-session")
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
mongoose.connect("mongodb://localhost:27017/shopping");
var User= require('./models/UserSchema.js');
const config = require('./config/config');
const googleconfig = require('./config/googloauthconfig');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userLogin = require('./routes/login');
var home= require('./routes/home');
var facebook = require('./routes/facebook')
var google = require('./routes/google')
var cookie = require('./routes/cookie');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
  const FacebookStrategy  = require('passport-facebook').Strategy;
var app = express();
var jsonParser = bodyParser.json()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('thisismysecret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',userLogin);
app.use('/home',home);
app.use('/facebook',facebook);
app.use('/cookie',cookie);
app.use('/google',google);

// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
app.post('/logintest', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/');
    });
  })(req, res, next);
});

passport.use(new FacebookStrategy({
  clientID: '538210533573481',
  clientSecret:'c62ef6efba6694e8ff087b5826052d3a' ,
  callbackURL: 'http://localhost:3000/facebook/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, done) {
  process.nextTick(function () {
    console.log('tests'+accessToken, refreshToken, profile, done);
    return done(null, profile);
  });
}
));

passport.use(new GoogleStrategy({
  clientID: "119533488129-f4gqclpfefct9s9p5kdpop9p22pouqj9.apps.googleusercontent.com",
  clientSecret: "EBg6MkFXITqBrnASBCWTY305",
  callbackURL: "http://localhost:3000/google/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  process.nextTick(function () {
    console.log('tests'+accessToken, refreshToken, profile, done);
    return done(null, profile);
  });
}
));

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
// POST /api/users gets JSON bodies
// Use the FacebookStrategy within Passport.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
