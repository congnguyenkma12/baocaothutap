var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports.loginPage = function(req,res,next){
    res.render('login/login');
  };

  // Validate and Check
 module.exports.postLogin = function(req,res){
   var error = res.locals.error;
   var value = res.locals.values;
   console.log("haha"+req.body);
   if(error){
    res.render('login/login');
   }
   console.log('Vao day');
   res.render('home/home',
   {
     errors:error,
     values:value,
   });

  };
  