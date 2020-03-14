var users = [
    {name:"cong",address:"test"},
    {name:"test",address:"hanoi"},
  
  ];
// root index
module.exports.rootindex= function(req, res, next) {
    res.render('index', {users:users});
  };

  // search user
  module.exports.searchUser= function(req,res,next){
    var name = req.query.name;
    var matchedUsers = users.filter(function(user){
      return user.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1
    });
    res.render('index', {users:matchedUsers});
  };
 

  // create user
  module.exports.createUser = function(req,res){
    res.render('createuser');
  };

 // create user with post method
 module.exports.postCreateUser = function(req,res){
    users.push(req.body);
    console.log(req.body);
    res.render('index', {users:users});
  };
  
