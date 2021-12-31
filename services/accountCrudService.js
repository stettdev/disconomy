const { Account } = require('../database/models');

const register = async (ownerId) => {
  const account = await Account.create({ ownerId });

  console.info(`Registered new Bank Account (${account.id}) for Person with id:${account.ownerId}`);

  return account;
};

const get = async (ownerId) => Account.findOne({
  where: { ownerId },
});

const deregister = async (ownerId) => {
  await Account.destroy({ where: { ownerId } });

  console.info(`Deregistered Bank Account of Person with id:${ownerId}`);
};

module.exports = {
  get,
  register,
  deregister,
};
