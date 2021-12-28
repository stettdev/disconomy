const { Sequelize } = require('sequelize');
const { MySQL } = require('../config/env');

const sequelize = new Sequelize(
  MySQL.database, 
  MySQL.username, 
  MySQL.password,
  {
    host: MySQL.host,
    dialect: 'mysql',
  },
);

try {
  await sequelize.authenticate();
  console.info('Connection to database established successfully.')
} catch (error) {
  console.error('Unable to connect to database:', error);
}