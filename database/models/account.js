const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    modelName: 'Account',
  });
  return Account;
};
