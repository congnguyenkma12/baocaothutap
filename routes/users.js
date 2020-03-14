var express = require('express');
var controller = require('../controller/usercontroller/usercontroller');
var router = express.Router();
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping");

var app = express()
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create',controller.postCreateUser);

module.exports = router;
