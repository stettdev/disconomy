const CRUD = require('../services/personCrudService');

const getPerson = async (guildId, userId) => {
  let person = await CRUD.get(guildId, userId);

  if (!person) person = CRUD.register(guildId, userId);

  return person;
};

module.exports = {
  getPerson,
};
