"use strict";

const { findAll } = require("../../services/thread.service.js");

/**
 * Get list of conversations by authenticated user
 * it will the conversations with ordered latest message
 */
const list = async (req, res) => {
  let userId = req.information.id;
  try {
    const response = await findAll(userId);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { list };
