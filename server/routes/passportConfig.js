const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const LocalStrategy = require('passport-local').Strategy;
const {
  findUserById,
  findOrCreateUserByGoogleID,
  findUserLocal
} = require('../../database/queries');

passport.serializeUser((user, done) => {
  console.log('hey');
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  findUserById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

const localStrategy = new LocalStrategy((usernameOrEmail, password, done) => {
  findUserLocal(usernameOrEmail, password)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    })
});

// const googleStrategyOptions = {
//   clientID: process.env.GOOGLE_OAUTH_ID,
//   clientSecret: process.env.GOOGLE_OAUTH_SECRET,
//   callbackURL: '/auth/google/redirect'
// };

// const googleStrategy = new GoogleStrategy(googleStrategyOptions, (accesToken, refreshToken, profile, done) => {
//   let options = {
//     googleID: profile.id,
//     email: profile.emails[0].value
//   }


//   findOrCreateUserByGoogleID(options)
//     .then((user) => {
//       done(null, user);
//     })
//     .catch((err) => {
//       done(err);
//     });
// });

// passport.use(googleStrategy);
passport.use(localStrategy);
