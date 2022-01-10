const { Person } = require('../database');

// Get person or create new in database
const requirePerson = async (guildId, userId) => {
  const [person] = await Person.findOrCreate({ where: { guildId, userId } });
  return person;
};

module.exports = {
  requirePerson,
};
