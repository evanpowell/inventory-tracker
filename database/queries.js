const Sequelize = require('sequelize');
const { User, Item, Character } = require('./index');
const { hashPassword, comparePassword } = require('./encryptionHelpers');

const Op = Sequelize.Op;

const findUserLocal = (usernameOrEmail, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({
      where: {
        [Op.or]: [
          { username: usernameOrEmail },
          { email: usernameOrEmail }
        ]
      }
    })
      .then((user) => {
        comparePassword(password, user.password)
          .then(() => {
            resolve(user);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const findUserById = (id) => {
  return User.findOne({
    where: {
      id
    }
  })
  .then((user) => {
    return user;
  });
};

const findOrCreateUserByGoogleID = (options) => {
  return User.findOrCreate({
    where: options
  })
  .then(([user, isNew]) => {
    return user;
  });
};

const createUser = (userInfo) => {
  return new Promise((resolve, reject) => {
    const { username, email, password } = userInfo;
    hashPassword(password)
      .then((hash) => {
        User.create({
          username,
          email,
          password: hash
        })
          .then((user) => {
            resolve(user);
          })
          .catch((err) => {
            reject(err);
          })
      })
      .catch((err) => {
        reject(err);
      });
  })
};

const getCharactersByUserId = (userId) => {
  return Character.findAll({
    where: {
      userId
    }
  })
  .then((characters) => {
    return characters;
  });
}

module.exports = {
  findUserLocal,
  findUserById,
  findOrCreateUserByGoogleID,
  createUser,
  getCharactersByUserId
}