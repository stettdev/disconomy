require('dotenv').config();

module.exports = {
  Setup: {
    environment: process.env.NODE_ENV,
  },
  Discord: {
    token: process.env.DISCORD_TOKEN,
    appId: process.env.DISCORD_APP_ID,
    testGuild: process.env.DISCORD_GUILD_ID,
  },
};
