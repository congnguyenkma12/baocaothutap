const express  = require('express')
const router   = express.Router();
const passport = require('passport')
var controller = require('../controller/logincontroller/logincontroller');

module.exports = (function() {   

    router.get('/',controller.loginPage);

	router.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}));

	router.get('/auth/facebook/callback',
	  passport.authenticate('facebook', { successRedirect : '/home', failureRedirect: '/login' }),
	  function(req, res) {
	    res.redirect('/');
	  });

	router.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});

    return router;    
})();


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}