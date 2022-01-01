const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      this.belongsTo(models.Person, {
        foreignKey: 'ownerId',
      });
    }
  }

  Account.init({
    balance: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
  }, {
    sequelize,
  });

  return Account;
};
