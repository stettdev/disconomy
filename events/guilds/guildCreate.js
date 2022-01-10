module.exports = {
  name: 'guildCreate',
  once: true,
  execute: (guild) => {
    console.info(`Joined new server. SERVER: ${guild.name} (${guild.id})`);
  },
};
