const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      this.hasOne(models.Account, { foreignKey: 'ownerId' });
      this.belongsToMany(models.Item, { through: 'PersonalItems' });
    }
  }

  Person.init({
    guildId: DataTypes.STRING,
    userId: DataTypes.STRING,
    money: DataTypes.INTEGER,
  }, {
    sequelize,
  });

  return Person;
};
