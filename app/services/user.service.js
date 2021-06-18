"use strict";

const { User, Sequelize } = require("../models");
const Op = Sequelize.Op;

module.exports = {
  findOne: async (userId) => {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { id: userId } })
        .then((user) => {
          if(!user) {
            resolve({ success: true, code: 404, message: "User not found" });
          } else {
            resolve({ success: true, code: 200, data: user });
          }
        })
        .catch((error) => {
          reject({ success: false, code: 500, message: error.message });
        });
    });
  },
  findAllExceptAuthenticated: async (authenticatedId) => {
    return new Promise((resolve, reject) => {
      User.findAll({
        where:{id: {[Op.ne]: authenticatedId}}
      })
      .then((response) => {
        resolve({ success: true, code: 200, data: response });
      })
      .then((error) => {
        reject({ success: false, code: 500, message: error.message });
      })
    });
  }
};
