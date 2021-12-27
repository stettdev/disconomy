require('dotenv').config();

module.exports = {
  Setup: {
    environment: process.env.ENVIRONMENT,
  },
  Discord: {
    token: process.env.DISCORD_TOKEN,
    appId: process.env.DISCORD_APP_ID,
  },
};
