const bcrypt = require('bcrypt');
const dbQuery = require('../../database/queries');

const validateUserByPassword = (username, password) => {
  return dbQuery.findUserByUsername(username)
  .then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          return [null, user];
        }
        return ['invalid password', null];
      });
    }
    return ['user not found', null];
  })
  .catch((err) => {
    return [err, null];
  });
}

const authenticateUserLocal = 

module.exports = {
  authenticateUserLocal
}