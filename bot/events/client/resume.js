module.exports = {
  name: 'guildCreate',
  once: true,
  execute: (replayed) => {
    console.info(`Websocket resumed. ${replayed} replays`);
  },
};
