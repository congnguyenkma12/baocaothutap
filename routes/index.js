var express = require('express');
var router = express.Router();
var controller = require('../controller/indexcontroller/indexcontroller')
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
/* GET home page. */
router.get('/',controller.rootindex);


// Search user

router.get('/user/search',controller.searchUser);


// create new user
router.get('/user/create',controller.createUser);

// create user with post method
router.post('/user/create',controller.postCreateUser);
module.exports = router;

