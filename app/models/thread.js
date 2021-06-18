'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    static associate(models) {
      this.hasMany(models.Message);
    }
  };
  Thread.init(
  {
    creator_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    recipient_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, 
  {
    sequelize,
    modelName: 'Thread',
    sender_id: false,
    timestamps: true,
  });
  return Thread;
};