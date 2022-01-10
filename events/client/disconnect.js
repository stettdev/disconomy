module.exports = {
  name: 'disconnect',
  once: true,
  execute: (event) => {
    console.info(`Bot disconnected. REASON: ${event.reason} (${event.code})`);
  },
};
