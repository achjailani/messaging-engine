"use strict";

const { Message, Sequelize } = require("../models");
const Op = Sequelize.Op;

module.exports = {
  createOne: async (data) => {
    return new Promise((resolve, reject) => {
      Message.create({
        thread_id: data.thread_id,
        sender_id: data.sender_id,
        message: data.message,
      })
        .then((response) => {
          resolve({
            success: true,
            data: response,
            message: "New message has been created.",
          });
        })
        .catch((error) => {
          reject({ success: false, code: 500, message: error.message });
        });
    });
  },
  findByThreadId: async (threadId) => {
    return new Promise((resolve, reject) => {
      Message.findAll({
        where: {[Op.and]: {
          thread_id: threadId,
          deletedAt: null
        }},
        order: [["createdAt", "DESC"]]
      })
      .then((response) => {
        if(!response) {
          resolve({success: true, code: 404, message: "No conversion found."});
        }
        resolve({success: true, code: 200, data: response});
      })
      .catch((error) => {
        reject({ success: false, code: 500, message: error.message });
      })
    });
  }
};
