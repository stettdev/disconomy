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

// Register database models
Models.forEach((model) => {
  const importedModel = model(sequelize, Sequelize.DataTypes);
  database[importedModel.name] = importedModel;
});

// Set up associations
Object.keys(database).forEach((modelName) => {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
});

// Export
database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;
