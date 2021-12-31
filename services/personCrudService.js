const { database: db } = require('../utils/database');
const { Person } = require('../database/models');

const register = async (guild, user) => {
  const person = await Person(
    db.sequelize,
    db.Sequelize.DataTypes,
  ).create({
    guildId: guild,
    userId: user,
  });

  console.info(`Registered new Person - ${person.guildId}:${person.userId}`);
};

const get = async (guild, user) => Person(
  db.sequelize,
  db.Sequelize.DataTypes,
).findOne({
  where: { guildId: guild, userId: user },
});

const deregister = async (guild, user) => {
  await Person(
    db.sequelize,
    db.Sequelize.DataTypes,
  ).destroy({ where: { guildId: guild, userId: user } });

  console.info(`Deregistered Person - ${guild}:${user}`);
};

module.exports = {
  get,
  register,
  deregister,
};
