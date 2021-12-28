module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Characters', [{
    userId: '170599455471435776',
    guildId: '883358379869896784',
  }], {}),
  down: async (queryInterface) => queryInterface.bulkDelete('Characters', null, {}),
};
