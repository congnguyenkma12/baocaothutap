var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ email: username }, function(err, user) {
        console.log("dfd");
        if (err) { return done(err); }
        console.log('1');
        if (!user) {
          console.log('test');
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validatePassword(password)) {
          console.log('test2');
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user,{ message: 'Incorrect password.' });
      });
    }
  ));
  