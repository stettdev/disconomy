module.exports = {
  name: 'message',
  once: true,
  execute: () => {
    console.info('Received message.');
  },
};
