const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PersonalItem extends Model { }

  PersonalItem.init({
    ownerId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
  }, {
    sequelize,
  });

  return PersonalItem;
};
