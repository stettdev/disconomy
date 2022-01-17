require('dotenv').config();

module.exports = {
  Setup: {
    environment: process.env.NODE_ENV,
  },
  API: {
    port: process.env.API_PORT,
    header_key: process.env.API_HEADER_KEY,
    header_value: process.env.API_HEADER_VALUE,
  },
  MySQL: {
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST_URL,
  },
};
