const { Thread, Sequelize } = require("../models");
const { currentDatetime } = require("../utils/datetime.js");
const Op = Sequelize.Op;

module.exports = {
  findOne: async ([userId, id]) => {
    return new Promise((resolve, reject) => {
      Thread.findOne({
        where: { creator_id: { [Op.or]: [userId, id] } },
        attributes: ["id", "creator_id", "recipient_id"]

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
      Thread.create({
        creator_id: data.creator_id,
        recipient_id: data.recipient_id,
      })
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
      Thread.update(
        { id: id, updatedAt: currentDatetime() },
        { where: { id: id } }
      )
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
