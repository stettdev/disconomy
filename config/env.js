require('dotenv').config();

module.exports = {
  Setup: {
    environment: process.env.NODE_ENV,
  },
  Discord: {
    token: process.env.DISCORD_TOKEN,
    appId: process.env.DISCORD_APP_ID,
  },
  MySQL: {
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST_URL,
  },
};
