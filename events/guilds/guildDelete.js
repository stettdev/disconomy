module.exports = {
  name: 'guildDelete',
  once: true,
  execute: (guild) => {
    console.info(`Left the server. SERVER: ${guild.name} (${guild.id})`);
  },
};
