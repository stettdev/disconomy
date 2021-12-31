const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PersonalItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }

  PersonalItem.init({
    ownerId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PersonalItem',
  });
  return PersonalItem;
};
