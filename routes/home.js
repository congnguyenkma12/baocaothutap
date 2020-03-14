var express = require('express');
var router = express.Router();
var controller = require('../controller/homecontroller/homecontroller');
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
/* GET home page. */
router.get('/',controller.homePage);
module.exports = router;
