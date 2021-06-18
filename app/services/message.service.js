"use strict";

const { Message, Sequelize } = require("../models");
const Op = Sequelize.Op;

module.exports = {
  createOne: async (data) => {
    return new Promise((resolve, reject) => {
      Message.create({
        thread_id: data.thread_id,
        sender_id: data.sender_id,
        recipient_id: data.recipient_id,
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
};
