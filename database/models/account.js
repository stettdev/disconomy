const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }

  Account.init({
    userId: DataTypes.STRING,
    guildId: DataTypes.STRING,
    currentAmount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};
