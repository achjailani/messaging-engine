"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    static associate(models) {
      this.hasMany(models.Message, {
        foreignKey: "thread_id",
        sourceKey: "id",
      });
    }
  }
  Thread.init(
    {
      sender_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Thread",
      timestamps: true
    }
  );
  return Thread;
};
