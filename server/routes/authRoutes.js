const router = require('express').Router();
const passport = require('passport');

require('./passportConfig');

const {
  createUser,
  getCharactersByUserId
} = require('../../database/queries');

router.post('/signup', (req, res) => {
  console.log(req.body);
  createUser(req.body)
  .then((user) => {
    req.login(user, (err) => {
      if (err) {
        return res.status(500).send('Server Error');
      }
      return res.send(user.username);
    });
  });
});

router.get('/test', (req, res) => {
  if (!req.user) {
    return res.send(false);
  }
  // change response to'true', implement preliminary request from vuex store to init state
  return res.send(req.user.username);
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  getCharactersByUserId(req.user.id)
  .then((characters) => {
    res.send({
      username: req.user.username,
      characters: characters
    });
  });
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.end();
  });
});

module.exports = router;
