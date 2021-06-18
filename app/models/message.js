"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      this.belongsTo(models.Thread, {
        foreignKey: "thread_id"
      });
      this.hasOne(models.DeletedMessage, { foreignKey: "message_id"});
    }
  }
  Message.init(
    {
      thread_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sender_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      message: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      message_type: {
        type: DataTypes.ENUM("text", "media"),
        defaultValue: "text",
      },
      readAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Message",
      updatedAt: false,
    }
  );
  return Message;
};
