
var bcrypt = require('bcrypt');
const mongoose = require('mongoose');
var Users = require('../../models/UserSchema.js');
//const Users = mongoose.model('Users');

var BCRYPT_SALT_ROUNDS = 12;

module.exports.rootindex= function(req, res, next) {
    res.render('index', {users:users});
  };

module.exports.postCreateUser =  function(req,res,next){
  console.log(req.body);
  const finalUser = new Users({email:req.body.email,
  password:req.body.password,});
finalUser.setPassword(req.body.password);

return finalUser.save()
  .then(() => res.status(200).send({
      "status": 200,
      "message": "successed",
     
  }));
  var result =  Users.save();
  response.send(result);
  
}
