const { MySQL } = require('./env');

module.exports = {
  database: MySQL.database,
  username: MySQL.username,
  password: MySQL.password,
  host: MySQL.host,
  dialect: 'mysql',
};
