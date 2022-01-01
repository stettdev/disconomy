const { Sequelize } = require('sequelize');
const { MySQL } = require('../config/env');

const Models = require('./models');

const database = {};

const sequelize = new Sequelize(
  MySQL.database,
  MySQL.username,
  MySQL.password,
  {
    host: MySQL.host,
    dialect: 'mysql',
  },
);

Models.forEach((model) => {
  const importedModel = model(sequelize, Sequelize.DataTypes);
  database[importedModel.name] = importedModel;
});

Object.keys(database).forEach((modelName) => {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;
