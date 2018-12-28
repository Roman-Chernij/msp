const JwtStratege = require('passport-jwt').Strategy;
const ExtracJwt = require('passport-jwt').ExtractJwt;

const { JWT_KEY } = require('../config/config');

const options = {
  jwtFromRequest: ExtracJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_KEY
};

module.exports = passport => {
  passport.use(
      new JwtStratege(options, (payload, done) => {

      })
  )
};