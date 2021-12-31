const { Person } = require('../database/models');

const register = async (guild, user) => {
  const person = await Person.create({
    guildId: guild,
    userId: user,
  });

  console.info(`Registered new Person - ${person.guildId}:${person.userId}`);
};

const get = async (guild, user) => Person.findOne({
  where: { guildId: guild, userId: user },
});

const deregister = async (guild, user) => {
  await Person.destroy({ where: { guildId: guild, userId: user } });

  console.info(`Deregistered Person - ${guild}:${user}`);
};

module.exports = {
  get,
  register,
  deregister,
};
