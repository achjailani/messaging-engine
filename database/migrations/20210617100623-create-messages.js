"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("messages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      thread_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      sender_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      recipient_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      message_type: {
        allowNull: false,
        type: Sequelize.ENUM("text", "media"),
        defaultValue: "text",
      },
      readAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("messages");
  },
};
