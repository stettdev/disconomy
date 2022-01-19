module.exports = {
  name: 'guildUnavailable',
  once: true,
  execute: (guild) => {
    console.info(`Server temporalily unavailable. SERVER: ${guild.name} (${guild.id})`);
  },
};
