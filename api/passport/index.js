const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require('passport-local').Strategy;

const auth = require('./auth');

const localStrategy = new LocalStrategy((username, password, done) => {
  auth.authenticateUserLocal(username, local)
  .then(([err, user]) => {
    if (user) {
      return done(null, user);
    }
    return done(err, false);
  })
});

passport.use(localStrategy);

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

module.exports = passport;
