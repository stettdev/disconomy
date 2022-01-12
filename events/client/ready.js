module.exports = {
  name: 'ready',
  once: true,
  execute: (client) => {
    console.info(`Logged in as ${client.user.tag}.\n`
        + `USERS: ${client.users.cache.size}\n`
        + `SERVERS: ${client.guilds.cache.size}`);

    client.user.setActivity('the waiting game');
  },
};
