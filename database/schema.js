const Sequelize = require('sequelize');

const { DB_PASSWORD } = process.env;

const sequelize = new Sequelize(`postgres://postgres:${DB_PASSWORD}@127.0.0.1:5432/postgres`);

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;