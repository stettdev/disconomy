const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Account, {
        foreignKey: 'ownerId',
      });
    }
  }

  Person.init({
    guildId: DataTypes.STRING,
    userId: DataTypes.STRING,
    money: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};
