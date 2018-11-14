var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    User = require('../controllers/Users_Controller.js');
    config = require('./config.js');


module.exports = function(passport){
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
  };
  passport.use(new JwtStrategy(opts, (token, done) => {
    try {
      // Pass the user details to the next middleware
      return done(null, token.user);
    } catch (error) {
      return done(error);
    }
  }));
}
