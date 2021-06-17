'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  messages.init(
    {
      id: DataTypes.INTEGER
      conversation_id: DataTypes.INTEGER,
      message: DataTypes.STRING,
      message_type: DataTypes.ENUM("text", "media"),
    }, 
    {
      sequelize,
      modelName: 'messages',
    }
  );
  return messages;
};