var express = require('express');
var router = express.Router();
var controller = require('../controller/logincontroller/logincontroller');
var userController = require('../validate/user.validate');
var bodyParser = require('body-parser')
var app = express()
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
/* GET home page. */
router.get('/',controller.loginPage);
/* GET users listing. */
router.post('/check',jsonParser,controller.postLogin);
  
  module.exports = router;

