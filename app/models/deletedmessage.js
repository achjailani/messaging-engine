'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeletedMessage extends Model {
    static associate(models) {
      this.belongsTo(models.Message, { foreignKey: "message_id"});
      this.belongsTo(models.User, { foreignKey: "user_id"});
    }
  };
  DeletedMessage.init({
    message_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER 
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'DeletedMessage',
    tableName: 'deleted_messages',
    updatedAt: false,
  });
  return DeletedMessage;
};