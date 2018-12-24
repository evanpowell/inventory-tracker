const Sequelize = require('sequelize');

const { DB_PASSWORD } = process.env;

const sequelize = new Sequelize(`postgres://postgres:${DB_PASSWORD}@127.0.0.1:5432/inventory-tracker`);

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING
  },
  googleID: {
    type: Sequelize.STRING,
    unique: true
  },
});

const Character = sequelize.define('character', {
  name: {
    type: Sequelize.STRING
  },
  proficiencies: {
    type: Sequelize.JSON
  },
});

const Item = sequelize.define('item', {
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.DECIMAL({ precision: 5, scale: 1 })
  },
  description: {
    type: Sequelize.STRING({ length: 1000 })
  },
  quantity: {
    type: Sequelize.SMALLINT({ length: 4 })
  },
  onPerson: {
    type: Sequelize.BOOLEAN
  },
  custom: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  quality: {
    type: Sequelize.STRING
  },
  dmgDie: {
    type: Sequelize.SMALLINT({ length: 2 })
  },
  dmgAdjust: {
    type: Sequelize.SMALLINT({ length: 2 })
  },
  durability: {
    type: Sequelize.SMALLINT({ length: 2 })
  },
  protectVal: {
    type: Sequelize.SMALLINT({ length: 2 })
  },
  agilityAdjust: {
    type: Sequelize.SMALLINT({ length: 2 })
  },
  activeEffect: {
    type: Sequelize.STRING
  },
  carryWeight: {
    type: Sequelize.SMALLINT({ length: 4 })
  }
});

const CustomAction = sequelize.define('customAction', {
  proficiency: {
    type: Sequelize.STRING
  },
  requiredItems: {
    type: Sequelize.JSON
  },
  description: {
    type: Sequelize.STRING({ length: 1000 })
  }
});

Character.belongsTo(User);
Item.belongsTo(Character);
CustomAction.belongsTo(Character);

sequelize.authenticate()
.then(() => {
  console.log('Database connection established');
  sequelize.sync({ force: true })
  .then(() => {
    console.log('Models synced');
  })
  .catch((err) => {
    console.log('Error syncing models:', err);
  })
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = {
  sequelize,
  User,
  Character,
  Item,
  CustomAction
};
