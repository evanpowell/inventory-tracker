const router = require('express').Router();
const passport = require('passport');

require('./passportConfig');

const { createUser } = require('../../database/queries');

router.post('/signup', (req, res) => {
  console.log(req.body);
  createUser(req.body)
  .then((user) => {
    req.login(user, (err) => {
      if (err) {
        return res.status(500).send('Server Error');
      }
      res.send(true);
    });
  });
});

router.get('/test', (req, res) => {
  if (!req.user) {
    return res.send(false);
  }
  return res.send(true);
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(true);
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.end();
  });
});

module.exports = router;
