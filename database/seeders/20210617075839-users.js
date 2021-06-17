'use strict';

const { hashPassword } = require("../../app/utils/auth.js");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [{
        fullname: "Ach. Jailani",
        email: "achjailani@gmail.com",
        phone: "0882009703055",
        password: await hashPassword("jay224400"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Muhammad",
        email: "muhammad@gmail.com",
        phone: "08840073399",
        password: await hashPassword("muhammad124"),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('People', null, {});
  }
};
