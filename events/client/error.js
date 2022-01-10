module.exports = {
  name: 'error',
  once: true,
  execute: (error) => {
    console.error(`Client error occurred. ERROR: ${error.message}`);
  },
};
