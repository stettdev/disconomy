const { Sequelize } = require('sequelize');
const { MySQL } = require('../config/env');
const models = require('../database/models');

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

models.forEach((model) => {
  database[model.name] = model(sequelize, Sequelize.DataTypes);
});

Object.keys(database).forEach((modelName) => {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = {
  database,
  authenticate: async () => {
    try {
      await sequelize.authenticate();
      console.info('Connection to database established successfully.');
    } catch (error) {
      console.error('Unable to connect to database:', error);
    }
  },
  synchronize: async () => {
    try {
      await sequelize.sync();
      console.info('Models synchronized successfully.');
    } catch (error) {
      console.error('Unable to synchronize database models:', error);
    }
  },
};
