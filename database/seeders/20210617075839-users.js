'use strict';

const { hashPassword } = require("../../app/utils/auth.js");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [{
        fullname: "Teguh",
        email: "teguh@gmail.com",
        phone: "6896868998",
        password: await hashPassword("jay224400"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Muhlis",
        email: "muhlis@gmail.com",
        phone: "79787789799",
        password: await hashPassword("jay224400"),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('People', null, {});
  }
};
