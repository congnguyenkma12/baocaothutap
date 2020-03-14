module.exports.validateuser= function(req,res,next){
    var error = [];
    if(!req.body.email){
      error.push('Email is required');
    }
    if(!req.body.password){
      error.push('Password is required')
    }
   if(!error){
    res.locals.error= error;
   }
   res.locals.values = req.body;
    next();

}