var express = require('express');
var router = express.Router();
var controller = require('../controller/indexcontroller/indexcontroller')
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get('/',function(req,res,next){
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('session-id',randomNumber,{signed:true});
    res.send("I sent a cookie");
});

module.exports = router;