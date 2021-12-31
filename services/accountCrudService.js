const { Account } = require('../database/models');
const { database: db } = require('../utils/database');

const register = async (ownerId) => {
  const account = await Account(
    db.sequelize,
    db.Sequelize.DataTypes,
  ).create({ ownerId });

  console.info(`Registered new Bank Account (${account.id}) for Person with id:${account.ownerId}`);

  return account;
};

const get = async (ownerId) => Account(
  db.sequelize,
  db.Sequelize.DataTypes,
).findOne({
  where: { ownerId },
});

const deregister = async (ownerId) => {
  await Account(
    db.sequelize,
    db.Sequelize.DataTypes,
  ).destroy({ where: { ownerId } });

  console.info(`Deregistered Bank Account of Person with id:${ownerId}`);
};

module.exports = {
  get,
  register,
  deregister,
};
