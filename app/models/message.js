"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      this.belongsTo(models.Thread, {
        foreignKey: "thread_id",
        targetKey: "id",
      });
    }
  }
  Message.init(
    {
      thread_id: DataTypes.INTEGER,
      sender_id: DataTypes.INTEGER,
      recipient_id: DataTypes.INTEGER,
      message: DataTypes.STRING,
      message_type: DataTypes.ENUM("text", "media"),
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
