"use strict";

const { findByThreadId } = require("../../services/message.service.js");
const { findOnByAuthenticated } = require("../../services/thread.service.js");

/**
 * Get messages in a conversation by Id
 * The Id is conversation's or thread's
 */
const thread = async (req, res) => {
  let { threadId } = req.params;
  if (!threadId) {
    return res.status(400).send({
      message: "Missing parameter.",
    });
  }
  const authenticatedId = req.information.id;
  try {
    const authenticated = await findOnByAuthenticated(
      authenticatedId,
      threadId
    );
    if (authenticated.code === 404) {
      return res.status(403).send({
        message: "Forbidden",
      });
    }
    const response = await findByThreadId(threadId);
    if(response.code === 404) {
    	return res.status(response.code).send({ message: response.message});
    }
    return res.status(response.code).send({
    	success: true,
    	data: response.data
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { thread };
