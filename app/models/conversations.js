'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class conversations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  conversations.init(
    {
      id: DataTypes.INTEGER,
      creator_id: DataTypes.INTEGER
    }, 
    {
      sequelize,
      modelName: 'conversations',
    }
  );
  return conversations;
};