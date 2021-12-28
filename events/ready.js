const {
  authenticate: authenticateDatabase,
  synchronize: syncDatabase,
} = require('../utils/database');

module.exports = {
  name: 'ready',
  once: true,
  execute: (client) => {
    console.info(`Ready. Logged in as ${client.user.tag}`);
    authenticateDatabase();
    syncDatabase();
  },
};
