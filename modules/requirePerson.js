const { Person } = require('../database');

// Get person or create new in database
module.exports = async (guildId, userId) => {
  const [person] = await Person.findOrCreate({ where: { guildId, userId } });
  return person;
};
