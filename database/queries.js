const db = require('./index');

const findUserByUsername = (username) => {
  return db.User.findOne({
    where: { username },
    attributes: ['id', 'password']
  })
  .then((user) => {
    return user;
  });
}

const findOrCreateUserByGoogleID = (googleID, done) => {
  return db.User.findOrCreate({
    googleId
  })
  .then(([user, isNew]) => {
    return done(err, user);
  });
};

module.exports = {
  findUserByUsername,
  findOrCreateUserByGoogleID
}