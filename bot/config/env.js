require('dotenv').config();

module.exports = {
  Setup: {
    environment: process.env.NODE_ENV,
  },
  API: {
    port: process.env.API_PORT,
    headerKey: process.env.API_HEADER_KEY,
    headerValue: process.env.API_HEADER_VALUE,
  },
  Discord: {
    token: process.env.DISCORD_TOKEN,
    appId: process.env.DISCORD_APP_ID,
    testGuild: process.env.DISCORD_GUILD_ID,
  },
};
