"use strict";

const { User, Sequelize } = require("../models");
const Op = Sequelize.Op;

module.exports = {
  findOne: async (userId) => {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { id: userId } })
        .then((user) => {
          !user
            ? resolve({ success: true, code: 404, message: "User not found" })
            : resolve({ success: true, code: 200, data: user });
        })
        .catch((error) => {
          reject({ success: false, code: 500, message: error.message });
        });
    });
  },
};
