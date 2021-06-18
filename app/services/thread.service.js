const { Thread, Sequelize } = require("../models");
const { currentDatetime } = require("../utils/datetime.js");
const Op = Sequelize.Op;

module.exports = {
  findOne: async ([userId, id]) => {
    return new Promise((resolve, reject) => {
      Thread.findOne({
        where: { sender_id: { [Op.or]: [userId, id] } },
      })
        .then((thread) => {
          !thread
            ? resolve({ success: true, code: 404, message: "User not found" })
            : resolve({ success: true, code: 200, data: thread });
        })
        .catch((error) => {
          reject({ success: false, code: 500, message: error.message });
        });
    });
  },
  createOne: async (data) => {
    return new Promise((resolve, reject) => {
      Thread.create({ sender_id: data.sender_id })
        .then((response) => {
          resolve({
            success: true,
            data: response,
            message: "New conversation has been created.",
          });
        })
        .catch((error) => {
          reject({ success: false, code: 500, message: error.message });
        });
    });
  },
  updateDatetime: async (id) => {
    return new Promise((resolve, reject) => {
      Thread.update({ updatedAt: currentDatetime() }, { where: { id: id } })
        .then((response) => {
          resolve({
            success: true,
            message: "Conversation has been updated.",
          });
        })
        .catch((error) => {
          reject({ success: false, code: 500, message: error.message });
        });
    });
  },
};
