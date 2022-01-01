const { Person } = require('../database');

const getPerson = async (guildId, userId) => {
  const [person] = await Person.findOrCreate({ where: { guildId, userId } });
  return person;
};

module.exports = {
  getPerson,
};
