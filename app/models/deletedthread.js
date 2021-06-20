'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeletedThread extends Model {
    static associate(models) {
      this.belongsTo(models.Thread, { foreignKey: "thread_id"});
      this.belongsTo(models.User, { foreignKey: "user_id"});
    }
  };
  DeletedThread.init({
    thread_id: {
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
    modelName: 'DeletedThread',
    tableName: 'deleted_threads',
    updatedAt: false,
  });
  return DeletedThread;
};