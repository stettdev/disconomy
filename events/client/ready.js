module.exports = {
  name: 'ready',
  once: true,
  execute: (client) => {
    console.info(`Logged in as ${client.user.tag}.\n
      USERS: ${client.users.size}\n
      SERVERS: ${client.guilds.size}`);

    client.user.setActivity('the waiting game');
  },
};
