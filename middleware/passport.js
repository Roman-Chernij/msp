const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const CONFIG = require('../config/config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: CONFIG.JWT_KEY
};

module.exports = passport => {
  passport.use(
      new JwtStrategy(options, async (payload, done) => {
        try {
          if (payload.UUID === CONFIG.UUID) {
            done(null, CONFIG.UUID)
          } else {
            done(null, false)
          }
        } catch (e) {
          console.log(e)
        }
      })
  )
};